const ham = document.querySelector('.header_hamburger');
const nav = document.querySelector('#header_hamburger_navigation');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});