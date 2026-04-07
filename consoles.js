document.addEventListener('DOMContentLoaded', () => {
    const consoleGrid = document.getElementById('console-grid');
    if (!consoleGrid) return;

    const allGamesAndConsoles = [
        { 
            brand: 'Sony', 
            model: 'PlayStation 5', 
            specs: [
                { name: 'Disc Edition (с дисководом)', price: 61990, img: 'img/PlayStation5sdisko.jpg' },
                { name: 'Digital Edition (без диска)', price: 54990, img: 'img/PlayStation5bezdisko.jfif' }
            ]
        },
        { 
            brand: 'Microsoft', 
            model: 'Xbox Series', 
            specs: [
                { name: 'Series X (1TB Black)', price: 56990, img: 'img/Xbox SeriesX.jfif' },
                { name: 'Series S (512GB White)', price: 32990, img: 'img/Xbox SeriesS.jfif' }
            ]
        },
        { 
            brand: 'Nintendo', 
            model: 'Switch OLED', 
            specs: [
                { name: 'White Edition', price: 31990, img: 'img/White Edition.jfif' },
                { name: 'Neon Red/Blue', price: 31990, img: 'img/Neon Red,Blue.jfif' }
            ]
        },
        { 
            brand: 'Игра', 
            model: 'Marvel\'s Spider-Man 2', 
            specs: [
                { name: 'Стандартное издание (PS5)', price: 6990, img: 'img/Стандартное издание (PS5).jfif' },
                { name: 'Collector\'s Edition', price: 24990, img: 'img/Collector.jfif' }
            ]
        },
        { 
            brand: 'Игра', 
            model: 'The Legend of Zelda', 
            specs: [
                { name: 'Tears of the Kingdom', price: 5490, img: 'img/Tears of the Kingdom.jpg' }
            ]
        },
        { 
            brand: 'Игра', 
            model: 'EA Sports FC 24', 
            specs: [
                { name: 'Версия для PS5', price: 7490, img: 'img/Версия для PS5.jfif' },
                { name: 'Версия для Xbox', price: 7490, img: 'img/Версия для Xbox.jfif' }
            ]
        }
    ];

    allGamesAndConsoles.forEach(item => {
        const card = document.createElement('div');
        card.className = 'phone-card';
        card.style.cursor = 'pointer';
        
        const specOptions = item.specs.map((s, i) => `<option value="${i}">${s.name}</option>`).join('');
        const initial = item.specs[0];

        card.innerHTML = `
            <span class="phone-brand">${item.brand}</span>
            <img src="${initial.img}" alt="${item.model}" class="product-image">
            <h3>${item.model}</h3>
            <div class="config-box">
                <label>Платформа / Модель:</label>
                <select class="memory-select" onclick="event.stopPropagation()">
                    ${specOptions}
                </select>
            </div>
            <div class="price-container">
                <div class="price-value">${initial.price.toLocaleString('ru-RU')} ₽</div>
                <div class="buy-button">Заказать</div> 
            </div>
        `;

        const select = card.querySelector('.memory-select');
        const priceDisplay = card.querySelector('.price-value');
        const productImage = card.querySelector('.product-image');

        // Смена фото и цены при выборе
        select.onchange = function() {
            const idx = parseInt(this.value);
            const variant = item.specs[idx];
            if (variant) {
                priceDisplay.textContent = variant.price.toLocaleString('ru-RU') + " ₽";
                productImage.src = variant.img;
            }
        };

        // Клик по карточке — переход к заказу
        card.onclick = () => {
            const idx = parseInt(select.value);
            const variant = item.specs[idx];
            const url = `ordersm.html?model=${encodeURIComponent(item.model)}&price=${variant.price}&img=${encodeURIComponent(variant.img)}&storage=${encodeURIComponent(variant.name)}`;
            location.href = url;
        };

        consoleGrid.appendChild(card);
    });
});