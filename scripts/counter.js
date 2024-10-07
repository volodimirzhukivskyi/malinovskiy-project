function animateCounter() {
  const counters = document.querySelectorAll('.counter');

  const observerOptions = {
    root: null, // Відстежуємо по всьому вікну перегляду
    threshold: 0.1, // Відсоток видимого елемента перед запуском функції
  };

  const updateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    // Зменшуємо значення increment для уповільнення
    const increment = target / 1000; // Зміни з 200 на 1000 для повільнішого збільшення

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      // Збільшуємо затримку, щоб уповільнити анімацію
      setTimeout(() => updateCounter(counter), 10); // Зміни з 1 на 10
    } else {
      counter.innerText = target;
    }
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCounter(entry.target);
        observer.unobserve(entry.target); // Зупиняємо спостереження після запуску анімації
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  counters.forEach((counter) => {
    counter.innerText = '0';
    observer.observe(counter);
  });
}

animateCounter();
