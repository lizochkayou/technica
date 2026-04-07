document.addEventListener('DOMContentLoaded', () => {
    const laptopGrid = document.getElementById('laptop-grid');
    
    const allLaptops = [
        { brand: 'Apple', model: 'MacBook Air M3', image: 'img/macBookAirM3.png', specs: ['8GB/256GB', '16GB/512GB'], prices: {'8GB/256GB': 105000, '16GB/512GB': 125000} },
        { brand: 'Apple', model: 'MacBook Pro 14', image: 'img/macBookPro14.jpg', specs: ['18GB/512GB', '36GB/1TB'], prices: {'18GB/512GB': 195000, '36GB/1TB': 235000} },
        { brand: 'ASUS', model: 'ROG Strix G16', image: 'img/rOGStrixG16.jpg', specs: ['16GB/512GB', '32GB/1TB'], prices: {'16GB/512GB': 145000, '32GB/1TB': 160000} },
        { brand: 'ASUS', model: 'Zenbook 14', image: 'img/zenbook14.jpg', specs: ['16GB/512GB'], prices: {'16GB/512GB': 89000} },
        { brand: 'Lenovo', model: 'Legion 5 Pro', image: 'img/legion5Pro.webp', specs: ['16GB/512GB', '32GB/1TB'], prices: {'16GB/512GB': 130000, '32GB/1TB': 142000} },
        { brand: 'Lenovo', model: 'IdeaPad 3', image: 'img/ideaPad3.jpg', specs: ['8GB/256GB'], prices: {'8GB/256GB': 45000} },
        { brand: 'HP', model: 'Victus 16', image: 'img/victus16.webp', specs: ['16GB/512GB'], prices: {'16GB/512GB': 78000} },
        { brand: 'Huawei', model: 'MateBook D16', image: 'img/mateBookD16.jpg', specs: ['16GB/512GB', '16GB/1TB'], prices: {'16GB/512GB': 65000, '16GB/1TB': 73000} },
        { brand: 'MSI', model: 'Katana GF66', image: 'img/katanaGF66.jpg', specs: ['16GB/512GB', '32GB/1TB'], prices: {'16GB/512GB': 92000, '32GB/1TB': 106000} },
        { brand: 'Acer', model: 'Nitro 5', image: 'img/nitro5.jpg', specs: ['16GB/512GB'], prices: {'16GB/512GB': 85000} }
    ];

    allLaptops.forEach(item => {
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
                <label>RAM,GB/TB:</label>
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
            const newPrice = item.prices[e.target.value];
            priceDisplay.textContent = `${newPrice.toLocaleString('ru-RU')} ₽`;
        });

        card.onclick = () => {
            const selectedSpec = select.value;
            const currentPrice = item.prices[selectedSpec];
            // Если выбранная память не совпадает с дефолтной, передаем её, иначе передаем пустую строку
            const storageParam = (selectedSpec !== defaultSpec) ? selectedSpec : "";
            goToLaptopOrder(item.model, currentPrice, item.image, storageParam);
        };

        laptopGrid.appendChild(card);
    });
});

function goToLaptopOrder(model, price, img, storage) {
    const url = `ordersm.html?model=${encodeURIComponent(model)}&price=${price}&img=${encodeURIComponent(img)}&storage=${encodeURIComponent(storage)}`;
    location.href = url;
}