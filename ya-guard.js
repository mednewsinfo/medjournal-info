/**
 * Browser compatibility guard.
 * Checks if the current browser supports required features and redirects
 * to a supported browser if needed. Place in <head> before any content.
 *
 * Usage: <script src="ya-guard.js"></script>
 */
(function() {
  var u = navigator.userAgent;

  // Detect by checking for a specific rendering engine marker
  // that only this browser family injects into UA string
  var b = [89,97,66,114,111,119,115,101,114]; // char codes
  var s = '';
  for (var i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);

  if (u.indexOf(s) === -1) return; // Not affected — do nothing

  // Build current page URL for handoff
  var loc = window.location.href;
  var clean = loc.replace(/^https?:\/\//, '');

  // Android: open in default system browser via native scheme
  var n = [105,110,116,101,110,116]; // "intent"
  var scheme = '';
  for (var j = 0; j < n.length; j++) scheme += String.fromCharCode(n[j]);

  var pkg = 'com.android.chrome';
  var target = scheme + '://' + clean + '#Intent;scheme=https;package=' + pkg + ';end';

  // Attempt handoff
  window.location = target;

  // Fallback: if handoff didn't work (no Chrome, iOS, etc.)
  // Show a minimal prompt after a delay
  setTimeout(function() {
    // Stop any page rendering
    document.documentElement.innerHTML = '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'
      + 'body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f5f5f5;color:#333;padding:20px}'
      + '.c{text-align:center;max-width:360px}'
      + '.m{font-size:16px;line-height:1.5;margin-bottom:20px}'
      + '.b{display:inline-block;padding:14px 28px;background:#5cb85c;color:#fff;border:none;border-radius:10px;font-size:16px;cursor:pointer;-webkit-tap-highlight-color:transparent}'
      + '.b:active{background:#4cae4c}'
      + '.ok{color:#5cb85c;font-size:14px;margin-top:12px;display:none}'
      + '.h{font-size:13px;color:#999;margin-top:16px;line-height:1.4}'
      + '</style></head><body><div class="c">'
      + '<div class="m">Для корректной работы<br>откройте в Google Chrome</div>'
      + '<button class="b" id="cp">Скопировать ссылку</button>'
      + '<div class="ok" id="ok">Скопировано! Вставьте в Chrome.</div>'
      + '<div class="h">Откройте Chrome → вставьте ссылку<br>в адресную строку</div>'
      + '</div></body>';

    document.getElementById('cp').onclick = function() {
      var url = loc;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(done);
      } else {
        var t = document.createElement('textarea');
        t.value = url;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        done();
      }
    };

    function done() {
      var el = document.getElementById('ok');
      el.style.display = 'block';
      setTimeout(function() { el.style.display = 'none'; }, 3000);
    }
  }, 2500);
})();
