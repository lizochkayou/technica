document.addEventListener('DOMContentLoaded', () => {
    const audioGrid = document.getElementById('audio-grid');
    if (!audioGrid) return;

    const allAudio = [
        { 
            brand: 'JBL', 
            model: 'Charge 5', 
            specs: [
                { name: 'Black', price: 13500, img: 'img/Charge5Black.jfif' },
                { name: 'Blue', price: 13500, img: 'img/Charge5Blue.jfif' },
                { name: 'Squad (Камуфляж)', price: 14200, img: 'img/Charge5Squad.jfif' }
            ]
        },
        { 
            brand: 'Yandex', 
            model: 'Станция Миди', 
            specs: [
                { name: 'Черный антрацит', price: 14990, img: 'img/Черный антрайит.jfif' },
                { name: 'Серый опал', price: 14990, img: 'img/Серый опал.jfif' },
                { name: 'Изумруд', price: 14990, img: 'img/Изумруд.jfif' }
            ]
        },
        { 
            brand: 'Apple', 
            model: 'AirPods Max', 
            // specs теперь содержит и название, и цену, и путь к фото
            specs: [
                { name: 'Space Gray', price: 59990, img: 'img/AirPodsMaxGrey.webp' },
                { name: 'Sky Blue', price: 59990, img: 'img/AirPodsMaxBlue.jpg' },
                { name: 'Pink', price: 59990, img: 'img/AirPodsMaxPink.jpg' }
            ]
        },
        { 
            brand: 'Sony', 
            model: 'WH-1000XM5', 
            specs: [
                { name: 'Black', price: 36990, img: 'img/WH-1000XM5Black.jfif' },
                { name: 'Silver', price: 36990, img: 'img/WH-1000XM5Silver.jfif' }
            ]
        },
        { 
            brand: 'Marshall', 
            model: 'Major IV', 
            specs: [
                { name: 'Black Classic', price: 14990, img: 'img/MajorIVBlack.jfif' },
                { name: 'Brown Retro', price: 15490, img: 'img/MajorIVBrown.webp' }
            ]
        },
        { 
            brand: 'Apple', 
            model: 'AirPods Pro 2', 
            specs: [
                { name: 'USB-C Edition', price: 24490, img: 'img/AirPodsPro2.jpg' }
            ]
        }
    ];

    allAudio.forEach(item => {
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
                <label>Цвет / Версия:</label>
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

        // ГЛАВНОЕ: Меняем и цену, и картинку
        select.onchange = function() {
            const idx = parseInt(this.value);
            const selectedVariant = item.specs[idx];
            
            if (selectedVariant) {
                // Обновляем цену
                priceDisplay.textContent = selectedVariant.price.toLocaleString('ru-RU') + " ₽";
                // Обновляем картинку
                productImage.src = selectedVariant.img;
            }
        };

        card.onclick = () => {
            const idx = parseInt(select.value);
            const variant = item.specs[idx];
            
            const url = `ordersm.html?model=${encodeURIComponent(item.model)}&price=${variant.price}&img=${encodeURIComponent(variant.img)}&storage=${encodeURIComponent(variant.name)}`;
            location.href = url;
        };

        audioGrid.appendChild(card);
    });
});