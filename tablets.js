document.addEventListener('DOMContentLoaded', () => {
    const tabletGrid = document.getElementById('tablet-grid');
    
    const allTablets = [
        { brand: 'Apple', model: 'iPad Pro 13 M4', image: 'img/iPadPro13M4.jpg', specs: ['256GB', '512GB', '1024GB'], prices: {'256GB': 77799, '512GB': 95599, '1024GB': 122100} },
        { brand: 'Apple', model: 'iPad Air 11 M2', image: 'img/iPadAir11M2.jpg', specs: ['128GB', '256GB', '512GB'], prices: {'128GB': 42899, '256GB': 51199, '512GB': 62999} },
        { brand: 'Samsung', model: 'Galaxy Tab S9 Ultra', image: 'img/galaxyTabS9Ultra.jpg', specs: ['256GB', '512GB','1024GB'], prices: {'256GB': 125999, '512GB': 111499,'1024GB':170999} },
        { brand: 'Samsung', model: 'Galaxy Tab S9 FE', image: 'img/galaxyTabS9FE.webp', specs: ['128GB', '256GB'], prices: {'128GB': 37799, '256GB': 50799} },
        { brand: 'Xiaomi', model: 'Xiaomi Pad 6', image: 'img/xiaomiPad6.jpg', specs: ['128GB', '256GB'], prices: {'128GB': 39999, '256GB': 45999} },
        { brand: 'Xiaomi', model: 'Redmi Pad Pro', image: 'img/RedmiPadPro.jpg', specs: ['128GB', '256GB'], prices: {'128GB': 29999, '256GB': 34999} },
        { brand: 'Huawei', model: 'MatePad Pro 13.2', image: 'img/matePadPro13.2.jpg', specs: ['256GB', '512GB'], prices: {'256GB': 37799, '512GB': 43899} },
        { brand: 'Huawei', model: 'MatePad 11.5S', image: 'img/matePad11.5S.jpg', specs: ['128GB'], prices: {'128GB': 18999} },
        { brand: 'Honor', model: 'Honor Pad 9', image: 'img/honorPad9.jfif', specs: ['128GB', '256GB'], prices: {'128GB': 19999, '256GB': 32999} },
        { brand: 'Lenovo', model: 'Tab P12', image: 'img/tabP12.jpg', specs: ['128GB'], prices: {'128GB': 37799} }
    ];

    allTablets.forEach(item => {
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
                <label>Объем памяти:</label>
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

        // Живое обновление цены
        select.addEventListener('change', (e) => {
            const newPrice = item.prices[e.target.value];
            priceDisplay.textContent = `${newPrice.toLocaleString('ru-RU')} ₽`;
        });

        // Клик по карточке
        card.onclick = () => {
            const selectedSpec = select.value;
            const currentPrice = item.prices[selectedSpec];
            // Если выбрана дефолтная память, в параметр заказа уходит пустота
            const storageParam = (selectedSpec !== defaultSpec) ? selectedSpec : "";
            goToTabletOrder(item.model, currentPrice, item.image, storageParam);
        };

        tabletGrid.appendChild(card);
    });
});

function goToTabletOrder(model, price, img, storage) {
    const url = `ordersm.html?model=${encodeURIComponent(model)}&price=${price}&img=${encodeURIComponent(img)}&storage=${encodeURIComponent(storage)}`;
    location.href = url;
}