document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    
    // Получаем данные из ссылки
    const model = params.get('model');
    const priceParam = params.get('price'); // Тут должна быть цена
    const img = params.get('img');
    const storage = params.get('storage');

    const displayModel = document.getElementById('display-model');
    const displayPrice = document.getElementById('display-price');
    const displayImg = document.getElementById('display-img');
    const mainContent = document.getElementById('order-main-content');
    const checkoutForm = document.getElementById('checkout-form');

    if (model) {
        // 1. Название (если есть доп. параметры - пишем в скобках)
        displayModel.textContent = storage ? `${model} (${storage})` : model;
        
        // 2. Картинка
        if (img) displayImg.src = img;

        // 3. ПРОВЕРКА ЦЕНЫ (Решаем проблему "Цена по запросу")
        // Убираем всё лишнее, оставляем только цифры
        let rawPrice = priceParam ? priceParam.replace(/\s/g, '') : "0";
        let finalPrice = parseInt(rawPrice);

        if (!isNaN(finalPrice) && finalPrice > 0) {
            // Форматируем красиво: 20 199 ₽
            displayPrice.textContent = finalPrice.toLocaleString('ru-RU') + ' ₽';
        } else {
            // Если всё-таки пришел пустой параметр, попробуем вывести его как текст
            displayPrice.textContent = priceParam ? priceParam + ' ₽' : 'Уточняйте у менеджера';
        }
    }

    // Обработка формы
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userName = document.getElementById('client-name').value;
            
            mainContent.innerHTML = `
                <div style="grid-column: span 2; text-align: center; background: #fff; padding: 50px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <h2 style="color: #6c5ce7; font-size: 32px; margin-bottom: 10px;">✅ Заказ принят!</h2>
                    <p style="font-size: 18px; color: #555;">${userName}, всё закачалось и всё хорошо!</p>
                    <p style="margin-top: 10px; color: #888;">Мы скоро вам перезвоним.</p>
                    <button onclick="location.href='index.html'" style="margin-top: 25px; padding: 12px 35px; background: #6c5ce7; color: #fff; border: none; border-radius: 30px; cursor: pointer; font-weight: 600;">На главную</button>
                </div>
            `;
        });
    }
});