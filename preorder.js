document.addEventListener('DOMContentLoaded', () => {
    const modelBtns = document.querySelectorAll('.model-btn');
    const storageBtns = document.querySelectorAll('.storage-btn');
    const priceDisplay = document.getElementById('display-price');
    const mainImg = document.getElementById('main-product-img');

    function updateOrder() {
        const activeModel = document.querySelector('.model-btn.active');
        const activeStorage = document.querySelector('.storage-btn.active');
        
        const total = parseInt(activeModel.dataset.base) + parseInt(activeStorage.dataset.extra);
        
        priceDisplay.textContent = total.toLocaleString('ru-RU') + ' ₽';
        mainImg.src = activeModel.dataset.img;
        
        // Эффект появления картинки
        mainImg.style.opacity = 0;
        setTimeout(() => { mainImg.style.opacity = 1; }, 50);
    }

    modelBtns.forEach(btn => btn.addEventListener('click', () => {
        modelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateOrder();
    }));

    storageBtns.forEach(btn => btn.addEventListener('click', () => {
        storageBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateOrder();
    }));

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваш предзаказ принят. Мы свяжемся с вами!');
    });
});