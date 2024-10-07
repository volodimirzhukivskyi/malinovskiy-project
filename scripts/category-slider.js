const slidesCategory = document.querySelectorAll('.hero__slide');
let currentSlide = 0; // Поточний слайд
let slideIntervalCategory; // Для збереження інтервалу

// Функція для показу слайду за індексом
function showSlide(index) {
  slidesCategory.forEach((s) => {
    s.classList.remove('hero__slide--active', 'hero__slide--inactive'); // Очищаємо класи всіх слайдів
    const details = s.querySelector('.hero__details');
    const verticalText = s.querySelector('.hero__vertical-text');
    details.style.display = 'none'; // Ховаємо всі деталі
    details.classList.remove('hero__details--active');
    verticalText.classList.remove('hero__vertical-text--active');
  });

  const current = slidesCategory[index]; // Отримуємо поточний слайд
  const details = current.querySelector('.hero__details');
  const verticalText = current.querySelector('.hero__vertical-text');
  current.classList.add('hero__slide--active'); // Додаємо активний клас до поточного слайду
  details.style.display = 'block'; // Показуємо деталі поточного слайду
  verticalText.classList.add('hero__vertical-text--active');
  setTimeout(() => {
    details.classList.add('hero__details--active'); // Додаємо анімацію для деталей
  }, 10);

  // Позначаємо всі інші слайди як неактивні
  slidesCategory.forEach((s, i) => {
    if (i !== index) {
      s.classList.add('hero__slide--inactive');
    }
  });

  currentSlide = index; // Оновлюємо поточний індекс слайду
}

// Функція для автоматичної зміни слайдів
function startSlideShow() {
  slideIntervalCategory = setInterval(() => {
    currentSlide = (currentSlide + 1) % slidesCategory.length; // Переходимо до наступного слайду, якщо досягли кінця — починаємо спочатку
    showSlide(currentSlide); // Показуємо поточний слайд
  }, 100000); // Зміна кожні 10 секунд
}

// Ініціалізація слайдера (показ першого слайду)
showSlide(currentSlide);

// Запускаємо автоматичну зміну слайдів
startSlideShow();

// Якщо потрібно зупинити автоматичне відтворення, можна додати функцію для паузи
function stopSlideShow() {
  clearInterval(slideIntervalCategory);
}

// Додаємо обробник подій для кліку по кожному слайду
slidesCategory.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    stopSlideShow(); // Зупиняємо автоматичну зміну слайдів після кліку
    showSlide(index); // Показуємо клікнутий слайд
    startSlideShow(); // Перезапускаємо автоматичне відтворення
  });
});
