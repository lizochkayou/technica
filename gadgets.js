document.addEventListener('DOMContentLoaded', () => {
    const gadgetGrid = document.getElementById('gadget-grid');
    if (!gadgetGrid) return;

    // Список твоих гаджетов
    const allGadgets = [
        { 
            brand: 'Apple', 
            model: 'Watch Series 9', 
            image: 'img/WatchSeries9.jpg', 
            specs: ['41mm GPS', '45mm GPS'], 
            prices: [42990, 46990] 
        },
        { 
            brand: 'Samsung', 
            model: 'Galaxy Watch 6', 
            image: 'img/GalaxyWatch6.jfif', 
            specs: ['40mm Bluetooth', '44mm Bluetooth'], 
            prices: [25490, 28990] 
        },
        { 
            brand: 'Xiaomi', 
            model: 'Smart Band 8', 
            image: 'img/SmartBand8.webp', 
            specs: ['Global Version'], 
            prices: [3490] 
        },
        { 
            brand: 'Huawei', 
            model: 'Watch GT 4', 
            image: 'img/WatchGT4.jpg', 
            specs: ['41mm White Leather', '46mm Black Sport'], 
            prices: [19990, 21990] 
        },
        { 
            brand: 'Apple', 
            model: 'Watch Ultra 2', 
            image: 'img/WatchUltra2.jfif', 
            specs: ['49mm Titanium'], 
            prices: [85990] 
        },
        { 
            brand: 'Garmin', 
            model: 'Fenix 7 Pro', 
            image: 'img/Fenix7Pro.jfif', 
            specs: ['Solar Edition'], 
            prices: [72000] 
        }
    ];

    allGadgets.forEach(item => {
        const card = document.createElement('div');
        card.className = 'phone-card';
        card.style.cursor = 'pointer';
        
        // Создаем выпадающий список. Value — это индекс (0, 1, 2...)
        const specOptions = item.specs.map((s, i) => `<option value="${i}">${s}</option>`).join('');

        card.innerHTML = `
            <span class="phone-brand">${item.brand}</span>
            <img src="${item.image}" alt="${item.model}">
            <h3>${item.model}</h3>
            <div class="config-box">
                <label>Размер / Тип:</label>
                <select class="memory-select" onclick="event.stopPropagation()">
                    ${specOptions}
                </select>
            </div>
            <div class="price-container">
                <div class="price-value">${item.prices[0].toLocaleString('ru-RU')} ₽</div>
                <div class="buy-button">Заказать</div> 
            </div>
        `;

        const select = card.querySelector('.memory-select');
        const priceDisplay = card.querySelector('.price-value');

        // Логика смены цены
        select.onchange = function() {
            const idx = parseInt(this.value);
            const newPrice = item.prices[idx];
            if (newPrice !== undefined) {
                priceDisplay.textContent = newPrice.toLocaleString('ru-RU') + " ₽";
            }
        };

        // Клик для перехода к оформлению заказа
        card.onclick = () => {
            const idx = parseInt(select.value);
            const currentPrice = item.prices[idx];
            const currentSpec = item.specs[idx];
            
            // Если опция одна, не передаем её как "память", чтобы не загромождать
            const storageParam = (item.specs.length > 1) ? currentSpec : "";
            
            const url = `ordersm.html?model=${encodeURIComponent(item.model)}&price=${currentPrice}&img=${encodeURIComponent(item.image)}&storage=${encodeURIComponent(storageParam)}`;
            location.href = url;
        };

        gadgetGrid.appendChild(card);
    });
});