/**
 * Универсальный обработчик формы для лендингов
 *
 * Подключение:
 *   1. IMask CDN перед этим скриптом:
 *      <script src="https://unpkg.com/imask@7.6.0/dist/imask.min.js"></script>
 *   2. Этот скрипт:
 *      <script src="form-handler.js"
 *        data-webhook="https://api.fxtrk.cc/webhook/leadsnd"
 *        data-landing="landing-name"
 *        data-thanks="thanks.html">
 *      </script>
 *
 * Или инлайн — скопировать содержимое (function(){...})() в <script>
 * и заменить CONFIG значения.
 *
 * Требования к HTML формы:
 *   - form с id="appeared-form"
 *   - input[name="name"] — поле имени
 *   - input[name="phone"] с id="phone" — поле телефона
 *   - button[type="submit"] — кнопка отправки
 *
 * URL-параметры (передаёт Binom через appendToLandingUrl):
 *   ?click_id={clickid}&sub1={t1}&sub2={t2}&sub3={t3}
 */
(function() {
  // --- Конфигурация ---
  var script = document.currentScript;
  var CONFIG = {
    webhook: (script && script.dataset.webhook) || 'https://api.fxtrk.cc/webhook/leadsnd',
    landing: (script && script.dataset.landing) || 'unknown',
    thanks:  (script && script.dataset.thanks)  || 'thanks.html'
  };

  // --- Маска телефона (IMask) ---
  var phoneInput = document.getElementById('phone');
  var phoneMask = null;
  if (phoneInput && typeof IMask !== 'undefined') {
    phoneMask = IMask(phoneInput, {
      mask: '+{7} (000) 000-00-00',
      lazy: false,
      placeholderChar: '_'
    });
    phoneInput.addEventListener('focus', function() { phoneMask.updateOptions({ lazy: false }); });
    phoneInput.addEventListener('blur', function() {
      if (phoneMask.unmaskedValue.length <= 1) { phoneMask.updateOptions({ lazy: true }); phoneInput.value = ''; }
    });
  }

  // --- Парсинг URL-параметров ---
  var params = {};
  var qs = window.location.search.replace('?', '').split('&');
  for (var i = 0; i < qs.length; i++) {
    var pair = qs[i].split('=');
    if (pair[0]) params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  // --- Отправка формы ---
  var form = document.getElementById('appeared-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var nameInput = form.querySelector('input[name="name"]');
    var name = nameInput.value.trim();
    var rawPhone = phoneMask ? phoneMask.unmaskedValue : form.querySelector('input[name="phone"]').value.replace(/\D/g, '');

    // Валидация имени
    if (!name || name.length < 2) {
      nameInput.style.borderColor = 'red';
      return;
    }
    nameInput.style.borderColor = '';

    // Валидация телефона: 11 цифр (7 + 10)
    if (rawPhone.length !== 11) {
      phoneInput.style.borderColor = 'red';
      return;
    }
    phoneInput.style.borderColor = '';

    // Все URL-параметры из трекера + данные формы
    var data = {};
    for (var key in params) {
      if (params.hasOwnProperty(key)) data[key] = params[key];
    }
    data.name = name;
    data.phone = '+' + rawPhone;
    data.landing = CONFIG.landing;

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Отправка...';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', CONFIG.webhook, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        window.location.href = CONFIG.thanks + '?name=' + encodeURIComponent(name);
      }
    };
    xhr.send(JSON.stringify(data));
  });
})();
