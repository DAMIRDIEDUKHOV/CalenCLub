document.addEventListener('DOMContentLoaded', () => {
    // Находим ключевые элементы на странице
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');

    // Проверка, найдены ли все элементы, чтобы избежать ошибок
    if (!track || slides.length === 0 || !nextButton || !prevButton) {
        console.error("Ошибка: Один из элементов слайдера не найден на странице.");
        return;
    }

    let currentIndex = 0; // Номер текущего слайда (начинаем с 0)
    const totalSlides = slides.length; // Общее количество слайдов

    // Эта функция обновляет позицию ленты со слайдами
    const updateSliderPosition = () => {
        // С помощью CSS transform сдвигаем ленту по горизонтали
        // Сдвиг равен номеру текущего слайда, умноженному на 100%
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Добавляем действие при клике на кнопку "Вперед"
    nextButton.addEventListener('click', () => {
        // Переходим к следующему слайду
        // Оператор '%' (остаток от деления) позволяет зациклить прокрутку.
        // Когда доходим до конца, он возвращает нас к 0.
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition(); // Вызываем функцию для обновления позиции
    });

    // Добавляем действие при клике на кнопку "Назад"
    prevButton.addEventListener('click', () => {
        // Переходим к предыдущему слайду
        // Конструкция `(currentIndex - 1 + totalSlides) % totalSlides` правильно обрабатывает
        // переход с первого слайда (0) на последний.
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition(); // Вызываем функцию для обновления позиции
    });
});