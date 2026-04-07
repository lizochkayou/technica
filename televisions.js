document.addEventListener('DOMContentLoaded', () => {
    const tvGrid = document.getElementById('tv-grid');
    if (!tvGrid) return;

    const allTVs = [
        { brand: 'Samsung', model: 'Crystal UHD', image: 'img/CrystalUHD.jpg', specs: ['55" 4K UltraHD', '65" 4K UltraHD', '85" 4K UltraHD'], prices: [35299, 46499, 105499] },
        { brand: 'LG', model: 'OLED C3', image: 'img/OLEDC3.avif', specs: ['48" 4K UHD', '55" 4K UHD', '65" 4K UHD'], prices: [97990, 137190, 176390] },
        { brand: 'Xiaomi', model: 'TV A2', image: 'img/TVA2.jpg', specs: ['32" HD', '43" 4K UHD', '50" 4K UHD'], prices: [16820, 27710, 32660] },
        { brand: 'Sony', model: 'Bravia XR', image: 'img/BraviaXR.jpg', specs: ['65" 4K UHD', '85" 4K UHD'], prices: [230299, 454199] },
        { brand: 'TCL', model: 'Mini LED C845', image: 'img/MiniLEDC845.jfif', specs: ['55" 4K HDR', '65" 4K HDR'], prices: [59999, 79699] },
        { brand: 'Hisense', model: 'U7K', image: 'img/U7K.webp', specs: ['55" 4K UHD'], prices: [54699] },
        { brand: 'Philips', model: 'The One', image: 'img/TheOne.jfif', specs: ['65" 4K UHD'], prices: [192799] },
        { brand: 'Haier', model: 'S4', image: 'img/S4.jpg', specs: ['50" 4K UHD'], prices: [44699] },
        { brand: 'SBER', model: 'Line S', image: 'img/LineS.webp', specs: ['55" 4K UHD', '43" 4K UHD'], prices: [34499, 24999] },
        { brand: 'Apple', model: 'Apple TV 4K', image: 'img/AppleTV4K.jpg', specs: ['64GB Wi-Fi', '128GB Ethernet'], prices: [10199, 11799] }
    ];

    allTVs.forEach(item => {
        const card = document.createElement('div');
        card.className = 'phone-card';
        card.style.cursor = 'pointer';
        
        // Создаем опции, где value — это просто порядковый номер (0, 1, 2...)
        const specOptions = item.specs.map((s, index) => `<option value="${index}">${s}</option>`).join('');

        card.innerHTML = `
            <span class="phone-brand">${item.brand}</span>
            <img src="${item.image}" alt="${item.model}">
            <h3>${item.model}</h3>
            <div class="config-box">
                <label>Вариант:</label>
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

        // Теперь мы ищем цену по индексу, это исключает ошибку "undefined"
        select.onchange = function() {
            const index = parseInt(this.value); // Получаем 0, 1 или 2
            const newPrice = item.prices[index];
            
            if (newPrice !== undefined) {
                priceDisplay.textContent = newPrice.toLocaleString('ru-RU') + " ₽";
            }
        };

        card.onclick = () => {
            const index = parseInt(select.value);
            const currentPrice = item.prices[index];
            const currentSpec = item.specs[index];
            const storageParam = (index !== 0) ? currentSpec : "";
            
            const url = `ordersm.html?model=${encodeURIComponent(item.model)}&price=${currentPrice}&img=${encodeURIComponent(item.image)}&storage=${encodeURIComponent(storageParam)}`;
            location.href = url;
        };

        tvGrid.appendChild(card);
    });
});