window.addEventListener("DOMContentLoaded", function () {
    var countryCodes = {
        RU: {
            userImg: [
                "assets/m1.jpg",
                "assets/m2.jpg",
                "assets/m3.jpg",
                "assets/m4.jpg",
                "assets/av3.jpg",
                "assets/m5.jpg",
                "assets/m6.jpg",
                "assets/m7.jpg",
                "assets/m8.jpg",
                "assets/m9.jpg",
                "assets/m10.jpg",
                "assets/w1.jpg",
                "assets/m11.jpg",
                "assets/av6.jpg",
                "assets/m12.jpg",
                "assets/m13.jpg",
                "assets/m12.jpg",
                "assets/m14.jpg",
                "assets/m15.jpg",
                "assets/m16.jpg",
                "assets/m17.jpg",
                "assets/m18.jpg",
                "assets/w3.jpg",
                "assets/m19.jpg",
                "assets/m20.jpg",
                "assets/m21.jpg",
                "assets/av11.jpg",
                "assets/m22.jpg",
                "assets/m23.jpg",
                "assets/w4.jpg",
                "assets/m24.jpg",
                "assets/m25.jpg",
                "assets/m24.jpg",
                "assets/m38.jpg",
                "assets/m26.jpg",
                "assets/m27.jpg",
                "assets/m28.jpg",
                "assets/av13.jpg",
                "assets/m34.jpg",
                "assets/m30.jpg",
                "assets/m31.jpg",
                "assets/m32.jpg",
                "assets/m31.jpg",
                "assets/m29.jpg",
                "assets/m33.jpg",
            ],
            userNames: [
                "Коля Смирнов",
                "Александр",
                "Дмитрий Иванов",
                "Иван П.",
                "Михаил Петров",
                "Николай Соколов",
                "Андрей",
                "Алексей Николаевич",
                "Алексей Лебедев",
                "Владимир Егоров",
                "Тимур Маслов",
                "Мария Теплякова",
                "Иннокентий А.",
                "Арарат В.",
                "Игорь Смирнов",
                "Николай Орлов",
                "Игорь Смирнов",
                "Максим Широков",
                "Иван Меркулов",
                "Роман Шпаков",
                "Геннадий Петухов",
                "Жека",
                "Светлана Друммонд",
                "Марат",
                "Дмитрий Алиев",
                "Евгений Ржанов",
                "Рома Новиков",
                "Юра",
                "Олег Павлович",
                "Ира Орехова",
                "Роман Азизов",
                "Анатолий Шишкин",
                "Роман Азизов",
                "Егор Федосеев",
                "Владислав Чернов",
                "Николай Калинин",
                "Олег Родионов",
                "Ольга Макарова",
                "Борис Соколов",
                "Артур Осипов",
                "Владимир Сухов",
                "Кирилл Темников",
                "Владимир Сухов",
                "Павел Ширяев",
                "Ярослав Б.",
            ],
            textGeo: [
                ["Владивостока", "Владивостока"],
                ["Никита Полянов", "Никита Полянов"],
                ["Гаврилин Андрей Михайлович", "Гаврилин Андрей Михайлович"],
                ["Гаврилин", "Гаврилин"],
                ["Владимир", "Владимир"],
                ["Игорь", "Игорь"],
                ["Михаил", "Михаил"],
                ["Николай", "Николай"],
                ["Геннадий", "Геннадий"],
                ["Советский и российский врач общей практики", "Советский и российский врач общей практики"],
                ["Евгений Морозов, 55 лет, г. Новосибирск", "Евгений Морозов, 55 лет, г. Новосибирск"],
                ["4 млн российских мужчин", "4 млн российских мужчин"],
                ["Саш", "Саш"],
                ["Леха", "Леха"],
                ["Игорь", "Игорь"],
                ["Дмитрий", "Дмитрий"],
                ["Юрий", "Юрий"],
                ["Рома", "Рома"],
                ["накрутить 10-20-30 тысяч", "накрутить 10-20-30 тысяч"],
            ],
            hero_01: "assets/hero-01-ru.jpg",
            hero_02: "assets/hero-02-ru.jpg",
            hero_03: "assets/hero-03-ru.jpg",
            hero_04: "assets/hero-04-ru.jpg",
            hero_05: "assets/hero-05-ru.jpg",
            hero_06: "assets/hero-06-ru.jpg",
            hero_07: "assets/hero-07-ru.jpg",
        },
        KZ: {
            userImg: [
                "assets/kz/m-1.jpg",
                "assets/kz/m-2.jpg",
                "assets/kz/m-3.jpg",
                "assets/kz/m-4.jpg",
                "assets/kz/m-5.jpg",
                "assets/kz/m-6.jpg",
                "assets/kz/m-7.jpg",
                "assets/kz/m-8.jpg",
                "assets/kz/m-9.jpg",
                "assets/kz/m-10.jpg",
                "assets/kz/m-11.jpg",
                "assets/kz/w-1.jpg",
                "assets/kz/m-12.jpg",
                "assets/kz/m-13.jpg",
                "assets/kz/m-14.jpg",
                "assets/kz/m-15.jpg",
                "assets/kz/m-14.jpg",
                "assets/kz/m-16.jpg",
                "assets/kz/m-17.jpg",
                "assets/kz/m-18.jpg",
                "assets/kz/m-19.jpg",
                "assets/kz/m-20.jpg",
                "assets/kz/w-2.jpg",
                "assets/kz/m-21.jpg",
                "assets/kz/m-22.jpg",
                "assets/kz/m-23.jpg",
                "assets/kz/m-24.jpg",
                "assets/kz/m-25.jpg",
                "assets/kz/m-26.jpg",
                "assets/kz/w-3.jpg",
                "assets/kz/m-27.jpg",
                "assets/kz/m-28.jpg",
                "assets/kz/m-27.jpg",
                "assets/kz/m-29.jpg",
                "assets/kz/m-30.jpg",
                "assets/kz/m-31.jpg",
                "assets/kz/m-32.jpg",
                "assets/kz/w-4.jpg",
                "assets/kz/m-33.jpg",
                "assets/kz/m-34.jpg",
                "assets/kz/m-35.jpg",
                "assets/kz/m-36.jpg",
                "assets/kz/m-35.jpg",
                "assets/kz/m-37.jpg",
                "assets/kz/m-38.jpg",
            ],
            userNames: [
                "Арман Жумабаев",
                "Алим Тургамбаев",
                "Адиль Жанболатов",
                "Акмарал Куанышбеков",
                "Ербол Батырханов",
                "Руслан Орынбасаров",
                "Алексей Токтаганов",
                "Берик Имангалиев",
                "Касым Серикбаев",
                "Абай Абдиров",
                "Нұрсұлтан Кайратулы",
                "Фатима Есенгалиева",
                "Абылай Есенгалиев",
                "Асылбек Мусабаев",
                "Шынгыс Каримов",
                "Альберт Кадырбеков",
                "Шынгыс Каримов",
                "Абзал Ермаганбетов",
                "Бексултан Дуйсенов",
                "Мейрамбек Кулмагамбетов",
                "Айдар Кенжебеков",
                "Бауыржан Мусинов",
                "Айсылу Казымова",
                "Аманжол Казыбеков",
                "Марат Жакупов",
                "Данияр Байбосынов",
                "Ардак Аубакиров",
                "Нурбек Казымов",
                "Азамат Жангельдин",
                "Жазира Жумабаева",
                "Акжол Кожахметов",
                "Талгат Каиргалиев",
                "Акжол Кожахметов",
                "Кайрат Сапарбаев",
                "Серик Абишев",
                "Еркебулан Бекболатов",
                "Акназар Смагулов",
                "Сауле Шарипова",
                "Ануар Алдабергенов",
                "Санжар Абдукаримов",
                "Куаныш Шарипов",
                "Алмаз Калиев",
                "Куаныш Шарипов",
                "Аскар Рыскулов",
                "Алихан Турсунбаев",
            ],
            textGeo: [
                ["Владивостока", "Атырау"],
                ["Никита Полянов", "Ерлан Абдумейнов"],
                ["Гаврилин Андрей Михайлович", "Серикбеков Нуржан Сакенович"],
                ["Гаврилин", "Серикбеков"],
                ["Владимир", "Азамат"],
                ["Игорь", "Нуржан"],
                ["Михаил", "Сакен"],
                ["Николай", "Равиль"],
                ["Геннадий", "Ерик"],
                [
                    "Советский и российский врач общей практики",
                    "Советский и российский врач общей практики, заслуженный врач СНГ",
                ],
                ["Евгений Морозов, 55 лет, г. Новосибирск", "Олжас Нурланов, 55 лет, г. Семей"],
                ["4 млн российских мужчин", "1 млн мужчин Казахстана"],
                ["Саш", "Алим"],
                ["Леха", "Леха"],
                ["Игорь", "Касым"],
                ["Дмитрий", "Марат"],
                ["Юрий", "Нурбек"],
                ["Рома", "Акжол"],
                ["накрутить 10-20-30 тысяч", "накрутить 50-100-150 тыс. тенге"],
            ],
            hero_01: "assets/hero-01-kz-uz.jpg",
            hero_02: "assets/hero-02-kz-uz.jpg",
            hero_03: "assets/hero-03-kz-uz.jpg",
            hero_04: "assets/hero-04-kz-uz.jpg",
            hero_05: "assets/hero-05-kz-uz.jpg",
            hero_06: "assets/hero-06-kz-uz.jpg",
            hero_07: "assets/hero-07-kz-uz.jpg",
        },
        UZ: {
            userImg: [
                "assets/uz/m-1.jpg",
                "assets/uz/m-2.jpg",
                "assets/uz/m-3.jpg",
                "assets/uz/m-4.jpg",
                "assets/uz/m-5.jpg",
                "assets/uz/m-6.jpg",
                "assets/uz/m-7.jpg",
                "assets/uz/m-8.jpg",
                "assets/uz/m-9.jpg",
                "assets/uz/m-10.jpg",
                "assets/uz/m-11.jpg",
                "assets/uz/w-1.jpg",
                "assets/uz/m-12.jpg",
                "assets/uz/m-13.jpg",
                "assets/uz/m-14.jpg",
                "assets/uz/m-15.jpg",
                "assets/uz/m-14.jpg",
                "assets/uz/m-16.jpg",
                "assets/uz/m-17.jpg",
                "assets/uz/m-18.jpg",
                "assets/uz/m-19.jpg",
                "assets/uz/m-20.jpg",
                "assets/uz/w-2.jpg",
                "assets/uz/m-21.jpg",
                "assets/uz/m-22.jpg",
                "assets/uz/m-23.jpg",
                "assets/uz/m-24.jpg",
                "assets/uz/m-25.jpg",
                "assets/uz/m-26.jpg",
                "assets/uz/w-3.jpg",
                "assets/uz/m-27.jpg",
                "assets/uz/m-28.jpg",
                "assets/uz/m-27.jpg",
                "assets/uz/m-29.jpg",
                "assets/uz/m-30.jpg",
                "assets/uz/m-31.jpg",
                "assets/uz/m-32.jpg",
                "assets/uz/w-4.jpg",
                "assets/uz/m-33.jpg",
                "assets/uz/m-34.jpg",
                "assets/uz/m-35.jpg",
                "assets/uz/m-36.jpg",
                "assets/uz/m-35.jpg",
                "assets/uz/m-37.jpg",
                "assets/uz/m-38.jpg",
            ],
            userNames: [
                "Азиз Джураев",
                "Гулом Отамуратов",
                "Васий Насимов",
                "Алишер Жумабоев",
                "Дониёр Сабиров",
                "Джахонгир Равшанов",
                "Икром Сайфуллаев",
                "Давлат Очилов",
                "Исмаил Сатторов",
                "Амин Зуфаров",
                "Ахмад Исаев",
                "Акбара Джураева",
                "Бобур Мирзияев",
                "Комил Тухтамышев",
                "Бахтовар Комилов",
                "Бахтыёр Махмудов",
                "Бахтовар Комилов",
                "Абдуллах Бегимбаев",
                "Мурад Фармонов",
                "Бахтиёр Каримов",
                "Абдулхаким Бошкаев",
                "Нурлан Шарипов",
                "Муниса Отамуратова",
                "Ильхом Салимов",
                "Насрин Хайдаров",
                "Азим Дустмухаммедов",
                "Бегзод Мирзаев",
                "Вохид Насыров",
                "Мирзо Файзиев",
                "Маржонгуль Насимова",
                "Амир Ибрагимов",
                "Лазиз Умаров",
                "Амир Ибрагимов",
                "Валижон Назаров",
                "Ботир Мухаммадов",
                "Дилшод Рустамов",
                "Джавохир Пардаев",
                "Анвара Жумабоева",
                "Алмаз Зафаров",
                "Баходир Каракулов",
                "Аброр Гафуров",
                "Аваз Ганиев",
                "Аброр Гафуров",
                "Камолиддин Сафаров",
                "Ашраф Камбаров",
            ],
            textGeo: [
                ["Владивостока", "Гулистана"],
                ["Никита Полянов", "Гафур Бакиров"],
                ["Гаврилин Андрей Михайлович", "Бекмирзаев Зариф Гафурович"],
                ["Гаврилин", "Бекмирзаев"],
                ["Владимир", "Манзур"],
                ["Игорь", "Ульфат"],
                ["Михаил", "Абдуллах"],
                ["Николай", "Нияз"],
                ["Геннадий", "Турсан"],
                [
                    "Советский и российский врач общей практики",
                    "Советский и российский врач общей практики, заслуженный врач СНГ",
                ],
                ["Евгений Морозов, 55 лет, г. Новосибирск", "Малик Турдиев, 55 лет, г. Шахрисабз"],
                ["4 млн российских мужчин", "1 млн мужчин Узбекистана"],
                ["Саш", "Гулом"],
                ["Леха", "Исмаил"],
                ["Игорь", "Бахтовар"],
                ["Дмитрий", "Насрин"],
                ["Юрий", "Вохид"],
                ["Рома", "Амир"],
                ["накрутить 10-20-30 тысяч", "накрутить 2-3-4 млн. сум"],
            ],
            hero_01: "assets/hero-01-kz-uz.jpg",
            hero_02: "assets/hero-02-kz-uz.jpg",
            hero_03: "assets/hero-03-kz-uz.jpg",
            hero_04: "assets/hero-04-kz-uz.jpg",
            hero_05: "assets/hero-05-kz-uz.jpg",
            hero_06: "assets/hero-06-kz-uz.jpg",
            hero_07: "assets/hero-07-kz-uz.jpg",
        },
    };

    let textContentFlag = false;
    let prevGeo = null;

    const change = function change(e) {
        const userNames = document.querySelectorAll(".b-comments__item-head");
        const userImg = document.querySelectorAll(".b-comments__item-avatar");
        const currentGeo = e;
        const textContent = document.querySelectorAll(".text-geo");
        const hero_01 = document.querySelector(".hero-01");
        const hero_02 = document.querySelector(".hero-02");
        const hero_03 = document.querySelector(".hero-03");
        const hero_04 = document.querySelector(".hero-04");
        const hero_05 = document.querySelector(".hero-05");
        const hero_06 = document.querySelector(".hero-06");
        const hero_07 = document.querySelector(".hero-07");
        const hiddenElements = document.querySelectorAll(".show");
        const showElements = document.querySelectorAll(`.${e.toLowerCase()}-show`);

        hiddenElements.forEach((element) => {
            element.style.display = "none";
        });

        showElements.forEach((element) => {
            element.style.display = "block";
        });

        hero_01.src = countryCodes[e].hero_01;
        hero_02.src = countryCodes[e].hero_02;
        hero_03.src = countryCodes[e].hero_03;
        hero_04.src = countryCodes[e].hero_04;
        hero_05.src = countryCodes[e].hero_05;
        hero_06.src = countryCodes[e].hero_06;
        hero_07.src = countryCodes[e].hero_07;

        function setTextContent(currentGeo, collectionText, geo) {
            collectionText.forEach((itemText) => {
                for (let indexSetItem = 0; indexSetItem < geo[currentGeo].textGeo.length; indexSetItem++) {
                    const checkText = geo[currentGeo].textGeo[indexSetItem][0];

                    if (
                        itemText.textContent
                            .replace(/\n/gi, "")
                            .trim()
                            .replace(/\s{2,}/gi, " ")
                            .toLowerCase() == checkText.toLowerCase()
                    ) {
                        itemText.textContent = geo[currentGeo].textGeo[indexSetItem][1];
                        break;
                    }
                }
            });
            textContentFlag = true;
            prevGeo = currentGeo;
        }

        function resetTextContent(currentGeo, collectionText, geo) {
            collectionText.forEach((itemText) => {
                for (let indexSetItem = 0; indexSetItem < geo[prevGeo].textGeo.length; indexSetItem++) {
                    const checkText = geo[prevGeo].textGeo[indexSetItem][1];

                    if (
                        itemText.textContent
                            .replace(/\n/gi, "")
                            .trim()
                            .replace(/\s{2,}/gi, " ")
                            .toLowerCase() == checkText.toLowerCase()
                    ) {
                        itemText.textContent = geo[prevGeo].textGeo[indexSetItem][0];
                        break;
                    }
                }
            });
            prevGeo = currentGeo;
        }

        function changeTextContent(currentGeo, collectionText, geo) {
            if (!textContentFlag) {
                setTextContent(currentGeo, collectionText, geo);
            } else {
                resetTextContent(currentGeo, collectionText, geo);
                setTextContent(currentGeo, collectionText, geo);
            }
        }

        changeTextContent(currentGeo, textContent, countryCodes);

        function changeOneImg(collection, prop) {
            collection.forEach((img) => {
                if (img) {
                    img.src = prop;
                }
            });
        }

        function changeImgCollection(collection, prop) {
            collection.forEach((img, i) => {
                if (img) {
                    img.src = prop[i];
                }
            });
        }

        changeImgCollection(userImg, countryCodes[e].userImg);

        function changeTextCollection(collection, prop) {
            collection.forEach((text, i) => {
                if (text) {
                    text.innerHTML = prop[i];
                }
            });
        }
        changeTextCollection(userNames, countryCodes[e].userNames);
    };
    selectors.forEach(function (elem) {
        elem.addEventListener("change", function (e) {
            if (Object.keys(countryCodes).includes(e.target.value)) {
                change(e.target.value);
            }
        });
    });
    if (Object.keys(countryCodes).includes(selectors[0].value)) {
        change(selectors[0].value);
    }
});
