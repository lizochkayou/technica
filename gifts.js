document.addEventListener('DOMContentLoaded', () => {
    const giftGrid = document.getElementById('gift-grid');
    if (!giftGrid) return;

    const gifts = [
        { 
            brand: 'TechHome', 
            model: 'Электронный сертификат', 
            specs: [
                { name: 'Номинал 1 000 ₽', price: 1000, img: 'img/1000rub.jpg' },
                { name: 'Номинал 3 000 ₽', price: 3000, img: 'img/3000rub.jpg' },
                { name: 'Номинал 5 000 ₽', price: 5000, img: 'img/5000rub.jpg' },
                { name: 'Номинал 10 000 ₽', price: 10000, img: 'img/10000rub.jpg' }
            ]
        },
    ];

    gifts.forEach(item => {
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
                <label>Выберите сумму:</label>
                <select class="memory-select" onclick="event.stopPropagation()">
                    ${specOptions}
                </select>
            </div>
            <div class="price-container">
                <div class="price-value">${initial.price.toLocaleString('ru-RU')} ₽</div>
                <div class="buy-button">Оформить</div> 
            </div>
        `;

        const select = card.querySelector('.memory-select');
        const priceDisplay = card.querySelector('.price-value');
        const productImage = card.querySelector('.product-image');

        select.onchange = function() {
            const idx = parseInt(this.value);
            const variant = item.specs[idx];
            if (variant) {
                priceDisplay.textContent = variant.price.toLocaleString('ru-RU') + " ₽";
                productImage.src = variant.img;
            }
        };

        card.onclick = () => {
            const idx = parseInt(select.value);
            const variant = item.specs[idx];
            // Передаем номинал в параметр storage, чтобы на странице заказа было видно сумму
            const url = `ordersm.html?model=${encodeURIComponent(item.model)}&price=${variant.price}&img=${encodeURIComponent(variant.img)}&storage=${encodeURIComponent(variant.name)}`;
            location.href = url;
        };

        giftGrid.appendChild(card);
    });
});