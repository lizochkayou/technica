document.addEventListener('DOMContentLoaded', () => {
    const accGrid = document.getElementById('acc-grid');
    if (!accGrid) return;

    const allAccessories = [
        { 
            brand: 'Apple', 
            model: 'Silicone Case (iPhone 15)', 
            specs: [
                { name: 'Storm Blue (Штормовой синий)', price: 4990, img: 'img/Штормовой синий.jpg' },
                { name: 'Guava (Гуава)', price: 4990, img: 'img/Гуава.jpg' },
                { name: 'Black (Черный)', price: 4990, img: 'img/Черный.jfif' }
            ]
        },
        { 
            brand: 'Xiaomi', 
            model: 'Power Bank 3 Ultra', 
            specs: [
                { name: '10000 mAh Black', price: 2890, img: 'img/10000 mAh Black.jfif' },
                { name: '10000 mAh Silver', price: 2890, img: 'img/10000 mAh Silver.jfif' }
            ]
        },
        { 
            brand: 'Apple', 
            model: 'MagSafe Charger', 
            specs: [
                { name: 'Беспроводная зарядка', price: 4500, img: 'img/MagSafe Charger.jfif' }
            ]
        },
        { 
            brand: 'Samsung', 
            model: 'Adapter 25W', 
            specs: [
                { name: 'Type-C White', price: 1990, img: 'img/Type-C White.jfif' },
                { name: 'Type-C Black', price: 1990, img: 'img/Adapter 25W Type-C Black.jfif' }
            ]
        },
        { 
            brand: 'Baseus', 
            model: 'Кабель 3-в-1', 
            specs: [
                { name: '1.2 метра (Black)', price: 1200, img: 'img/1.2 метра (Black).jfif' },
                { name: '1.2 метра (Red)', price: 1200, img: 'img/1.2 метра (Red).jfif' }
            ]
        },
        { 
            brand: 'Apple', 
            model: 'AirTag', 
            specs: [
                { name: '1 штука', price: 3800, img: 'img/AirTag.jfif' },
                { name: '4 штуки (упаковка)', price: 12500, img: 'img/AirTag 4.jfif' }
            ]
        }
    ];

    allAccessories.forEach(item => {
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
                <label>Вариант:</label>
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

        // Смена картинки и цены
        select.onchange = function() {
            const idx = parseInt(this.value);
            const variant = item.specs[idx];
            if (variant) {
                priceDisplay.textContent = variant.price.toLocaleString('ru-RU') + " ₽";
                productImage.src = variant.img;
            }
        };

        // Переход к оформлению заказа
        card.onclick = () => {
            const idx = parseInt(select.value);
            const variant = item.specs[idx];
            const url = `ordersm.html?model=${encodeURIComponent(item.model)}&price=${variant.price}&img=${encodeURIComponent(variant.img)}&storage=${encodeURIComponent(variant.name)}`;
            location.href = url;
        };

        accGrid.appendChild(card);
    });
});