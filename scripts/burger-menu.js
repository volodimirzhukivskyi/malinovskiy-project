AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  var button = document.querySelector('svg');
  var line = document.querySelectorAll('line');

  button.addEventListener('click', function () {
    if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
    } else {
      body.classList.add('menu-open');
    }
  });
});
