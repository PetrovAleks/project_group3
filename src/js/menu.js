document.querySelector('.menu-icon-wrapper').onclick = function() {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.nav__list').classList.toggle('nav__list--popup');
};
