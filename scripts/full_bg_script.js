const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const auto = true;
const intervalTime = 100000;
let slideInterval;

const changeSlide = (direction) => {
  const current = document.querySelector('.current');
  current.classList.remove('current');

  const newSlide =
    direction === 'next' ? current.nextElementSibling || slides[0] : current.previousElementSibling || slides[slides.length - 1];

  newSlide.classList.add('current');

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide('next'), intervalTime);
  }
};

nextButton.addEventListener('click', () => changeSlide('next'));
prevButton.addEventListener('click', () => changeSlide('prev'));

if (auto) {
  slideInterval = setInterval(() => changeSlide('next'), intervalTime);
}
// change slider height
const slider = document.querySelector('.slider');
const buttons = document.querySelector('.buttons');

const setSliderHeight = () => {
  const buttonsHeight = buttons.offsetHeight;
  slider.style.height = `calc(100vh - ${buttonsHeight}px)`;
};

// Викликати функцію при завантаженні сторінки
window.addEventListener('load', setSliderHeight);

// Викликати функцію при зміні розміру вікна
window.addEventListener('resize', setSliderHeight);
