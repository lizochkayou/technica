document.addEventListener('DOMContentLoaded', () => {
    const catalogGrid = document.getElementById('catalog-grid');
    
    const allPhones = [
        // 128, 256, 512 GB
        { brand: 'Apple', model: 'iPhone 16 Pro', price: 76390, image: 'img/iphone16pro.jpg', storage: ['128 GB', '256 GB', '512 GB'] },
        { brand: 'Apple', model: 'iPhone 16e', price: 48890, image: 'img/iphone16e.jpg', storage: ['128 GB', '256 GB', '512 GB'] },
        { brand: 'Xiaomi', model: 'Redmi Note 13 Pro', price: 23799, image: 'img/redminote13pro.webp', storage: ['128 GB', '256 GB', '512 GB'] },
        { brand: 'Apple', model: 'iPhone 15 Plus', price: 59999, image: 'img/iphone15plus.jpg', storage: ['128 GB', '256 GB', '512 GB'] },

        // 256, 512 GB
        { brand: 'Samsung', model: 'Galaxy S25 Ultra', price: 90999, image: 'img/galaxys25ultra.jpg', storage: ['256 GB', '512 GB'] },
        { brand: 'Xiaomi', model: 'Xiaomi 15 Pro', price: 22999, image: 'img/xiaomi15pro.jpg', storage: ['256 GB', '512 GB'] },
        { brand: 'Honor', model: 'Honor 200', price: 20499, image: 'img/honor200.jpg', storage: ['256 GB', '512 GB'] },
        { brand: 'Samsung', model: 'Galaxy Z Flip6', price: 79999, image: 'img/galaxyzflip6.webp', storage: ['256 GB', '512 GB'] },
        { brand: 'Asus', model: 'Zenfone 11 Ultra', price: 75199, image: 'img/zenfone11ultra.jpg', storage: ['256 GB', '512 GB'] },
        { brand: 'Nothing', model: 'Nothing Phone (2)', price: 40999, image: 'img/nothingPhone(2).png', storage: ['256 GB', '512 GB'] },
        { brand: 'Realme', model: 'Realme GT 6', price: 44999, image: 'img/realmeGT6.jpg', storage: ['256 GB', '512 GB'] },
        { brand: 'Sony', model: 'Xperia 1 VI', price: 55199, image: 'img/xperia1VI.jfif', storage: ['256 GB', '512 GB'] },

        // 128, 256 GB
        { brand: 'Samsung', model: 'Galaxy A55', price: 31799, image: 'img/galaxya55.jpg', storage: ['128 GB', '256 GB'] },
        { brand: 'Google', model: 'Pixel 8a', price: 25699, image: 'img/pixel8a.jpg', storage: ['128 GB', '256 GB'] },

        // Только 512 GB
        { brand: 'Honor', model: 'Magic6 Pro', price: 43699, image: 'img/magic6pro.jpg', storage: ['512 GB'] },
        { brand: 'Asus', model: 'ROG Phone 9', price: 24399, image: 'img/rogphone9.jpg', storage: ['512 GB'] },
        { brand: 'Xiaomi', model: 'Xiaomi 14 Ultra', price: 69999, image: 'img/xiaomi14ultra.jpg', storage: ['512 GB'] },
        { brand: 'Honor', model: 'Honor Magic V3', price: 100999, image: 'img/honormagicv3.jpg', storage: ['512 GB'] },
        { brand: 'Motorola', model: 'Edge 50 Pro', price: 23199, image: 'img/edge50 Pro.webp', storage: ['512 GB'] },

        // Только 128 GB
        { brand: 'Google', model: 'Pixel 9 Pro', price: 83299, image: 'img/pixel9pro.png', storage: ['128 GB'] }
    ];

    allPhones.forEach(item => {
        const card = document.createElement('div');
        card.className = 'phone-card';
        
        // Генерируем только те option, которые есть в массиве storage этой модели
        const storageOptions = item.storage.map(s => `<option value="${s}">${s}</option>`).join('');

        card.innerHTML = `
            <span class="phone-brand">${item.brand}</span>
            <img src="${item.image}" alt="${item.model}">
            <h3>${item.model}</h3>
            
            <div class="config-box">
                <label>Объем памяти:</label>
                <select class="memory-select">
                    ${storageOptions}
                </select>
            </div>

            <div class="price-container">
                <div class="price-value">${item.price.toLocaleString('ru-RU')} ₽</div>
                <button class="buy-button" onclick="goToOrder('${item.model.replace(/'/g, "\\'")}', ${item.price}, '${item.image}')">Заказать</button>
            </div>
        `;
        
        catalogGrid.appendChild(card);
    });
});

// Функция перехода на страницу заказа
function goToOrder(model, price, img) {
    // Находим конкретную карточку, чтобы узнать, какую память выбрал пользователь
    const cards = document.querySelectorAll('.phone-card');
    let selectedStorage = "128 GB"; // По умолчанию
    
    cards.forEach(card => {
        if (card.querySelector('h3').textContent === model) {
            selectedStorage = card.querySelector('.memory-select').value;
        }
    });

    // Формируем URL. Используем encodeURIComponent, чтобы символы типа (2) или + не ломали ссылку
    const url = `ordersm.html?model=${encodeURIComponent(model)}&price=${price}&img=${encodeURIComponent(img)}&storage=${encodeURIComponent(selectedStorage)}`;
    location.href = url;
}