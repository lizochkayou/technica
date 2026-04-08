document.addEventListener('DOMContentLoaded', () => {
    // 1. Пытаемся взять данные из адресной строки (для Брендов)
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    const priceParam = urlParams.get('price');
    const imgParam = urlParams.get('img');

    // 2. Находим твои элементы по ID (из твоего HTML)
    const imgEl = document.getElementById('display-img');
    const nameEl = document.getElementById('display-model');
    const priceEl = document.getElementById('display-price');

    // 3. ЛОГИКА ПРОВЕРКИ
    if (nameParam) {
        // --- ВАРИАНТ А: Если пришли данные из Брендов ---
        console.log("Загрузка данных из Брендов...");
        
        if (nameEl) nameEl.textContent = nameParam;
        
        if (priceEl && priceParam) {
            // Форматируем цену (добавляем пробел и знак ₽)
            priceEl.textContent = Number(priceParam).toLocaleString('ru-RU') + ' ₽';
        }
        
        if (imgEl && imgParam) {
            imgEl.src = imgParam;
        }
    } 
    else {
        // --- ВАРИАНТ Б: Если данных в ссылке нет (твои старые товары) ---
        console.log("Данных в URL нет, ищем в localStorage...");
        
        // Тут проверь, под какими именами ты сохраняла данные раньше. 
        // Если старые товары перестали работать, замени названия в скобках ниже:
        const oldName = localStorage.getItem('selectedProduct'); // или 'productName'
        const oldPrice = localStorage.getItem('selectedPrice');
        const oldImg = localStorage.getItem('selectedImg');

        if (oldName && nameEl) {
            nameEl.textContent = oldName;
            if (priceEl) priceEl.textContent = oldPrice + ' ₽';
            if (imgEl) imgEl.src = oldImg;
        }
    }
});