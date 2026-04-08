// promo.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. База данных акций (всё в одном месте)
    const promoData = {
        'spring': {
            title: "Весенняя распродажа",
            badge: "-50%",
            badgeColor: "#ff4757",
            image: "img/promo_spring.jpg",
            desc: "Начните сезон с новыми гаджетами по невероятным ценам!",
            list: ["Скидки до 50% на все смартфоны", "Рассрочка 0-0-24", "Защитное стекло в подарок"],
            link: "smartphones.html",
            btnText: "Выбрать смартфон"
        },
        'bogo': {
            title: "Акция: 2 по цене 1",
            badge: "NEW",
            badgeColor: "#2ed573",
            image: "img/promo_bogo.jpg",
            desc: "Покупай больше — плати меньше. Отличный повод обновить аксессуары всей семье.",
            list: ["При покупке двух чехлов — второй бесплатно", "Акция на все кабели и блоки питания", "Бонусные баллы удваиваются"],
            link: "accessories.html",
            btnText: "Выбрать аксессуары"
        },
        'shipping': {
            title: "Бесплатная доставка",
            badge: "ХИТ",
            badgeColor: "#1e90ff",
            image: "img/promo_shipping.jpg",
            desc: "Мы ценим ваше время и берем расходы по доставке на себя.",
            list: ["Бесплатно при заказе от 5000 ₽", "Доставка в день заказа", "Возможность примерки перед оплатой"],
            link: "audio.html",
            btnText: "Перейти в каталог"
        }
    };

    // 2. Получаем тип акции из URL
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    // 3. Находим элементы на странице
    const titleEl = document.getElementById('promo-title');
    const descEl = document.getElementById('promo-description');
    const imgEl = document.getElementById('promo-image');
    const badgeEl = document.getElementById('promo-badge');
    const listEl = document.getElementById('promo-list');
    const btnEl = document.getElementById('promo-action-btn');

    // 4. Подставляем данные
    const active = promoData[type];

    if (active) {
        titleEl.textContent = active.title;
        descEl.textContent = active.desc;
        imgEl.src = active.image;
        badgeEl.textContent = active.badge;
        badgeEl.style.backgroundColor = active.badgeColor;
        btnEl.href = active.link;
        btnEl.textContent = active.btnText;

        // Чистим и заполняем список условий
        listEl.innerHTML = "";
        active.list.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listEl.appendChild(li);
        });
    } else {
        document.querySelector('.promo-card-detailed').innerHTML = "<h1>Акция не найдена</h1>";
    }
});