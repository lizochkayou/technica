document.addEventListener('DOMContentLoaded', () => {
    const monitorGrid = document.getElementById('monitor-grid');
    
    const allMonitors = [
        { brand: 'Samsung', model: 'Odyssey G5', image: 'img/OdysseyG5.webp', specs: ['27" 2560x1440 144Hz'], prices: {'27" 2560x1440 144Hz': 20199} },
        { brand: 'LG', model: 'UltraGear', image: 'img/UltraGear.jpg', specs: ['27" 1920x1080 144Hz'], prices: {'27" 1920x1080 144Hz': 29999} },
        { brand: 'ASUS', model: 'ROG Swift', image: 'img/ROGSwift.jpg', specs: ['26.5" 2560x1440 540Hz'], prices: {'26.5" 2560x1440 540Hz': 141899} },
        { brand: 'AOC', model: 'Gaming C24G2', image: 'img/GamingC24G2.jpg', specs: ['23.6" 1920x1080 165Hz'], prices: {'23.6" 1920x1080 165Hz': 9299} },
        { brand: 'Dell', model: 'UltraSharp', image: 'img/UltraSharp.webp', specs: ['27" 2560x1440 120Hz'], prices: {'27" 2560x1440 120Hz': 59899} },
        { brand: 'Gigabyte', model: 'M27Q', image: 'img/M27Q.jpg', specs: ['27" 2560x1440 170Hz'], prices: {'27" 2560x1440 170Hz': 19999} },
        { brand: 'Xiaomi', model: 'Mi Desktop Monitor', image: 'img/MiDesktopMonitor.jpg', specs: ['27" 1920x1080 100Hz'], prices: {'27" 1920x1080 100Hz': 10499} },
        { brand: 'MSI', model: 'Optix G271', image: 'img/OptixG271.webp', specs: ['27" 1920x1080 144Hz'], prices: {'27" 1920x1080 144Hz': 15999} },
        { brand: 'HUAWEI', model: 'MateView GT', image: 'img/MateViewGT.jpg', specs: ['34" 3440x1440 165Hz'], prices: {'34" 3440x1440 165Hz': 30999} },
        { brand: 'BenQ', model: 'Zowie XL2411K', image: 'img/ZowieXL2411K.jpg', specs: ['24" 1920x1080 144Hz'], prices: {'24" 1920x1080 144Hz': 24199} }
    ];

    allMonitors.forEach(item => {
        const card = document.createElement('div');
        card.className = 'phone-card';
        card.style.cursor = 'pointer';
        
        const specOptions = item.specs.map(s => `<option value="${s}">${s}</option>`).join('');
        const defaultSpec = item.specs[0];

        card.innerHTML = `
            <span class="phone-brand">${item.brand}</span>
            <img src="${item.image}" alt="${item.model}">
            <h3>${item.model}</h3>
            <div class="config-box">
                <label>Характеристики:</label>
                <select class="memory-select" onclick="event.stopPropagation()">
                    ${specOptions}
                </select>
            </div>
            <div class="price-container">
                <div class="price-value">${item.prices[defaultSpec].toLocaleString('ru-RU')} ₽</div>
                <div class="buy-button">Заказать</div> 
            </div>
        `;

        const select = card.querySelector('.memory-select');
        const priceDisplay = card.querySelector('.price-value');

        select.addEventListener('change', (e) => {
            const val = e.target.value;
            const newPrice = item.prices[val];
            if(newPrice) priceDisplay.textContent = `${newPrice.toLocaleString('ru-RU')} ₽`;
        });

        card.onclick = () => {
            const selectedSpec = select.value;
            // ГЛАВНОЕ ИСПРАВЛЕНИЕ ТУТ:
            const currentPrice = item.prices[selectedSpec];
            
            // Если вдруг цена не нашлась в объекте, берем первую доступную цену этого товара
            const safePrice = currentPrice || Object.values(item.prices)[0];
            
            const storageParam = (selectedSpec !== defaultSpec) ? selectedSpec : "";
            
            // Передаем safePrice вместо просто currentPrice
            const url = `ordersm.html?model=${encodeURIComponent(item.model)}&price=${safePrice}&img=${encodeURIComponent(item.image)}&storage=${encodeURIComponent(storageParam)}`;
            location.href = url;
        };

        monitorGrid.appendChild(card);
    });
});