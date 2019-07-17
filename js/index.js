var mainNavToggle = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav');
var header = document.querySelector('header');
var pageHeaderWrap = document.querySelector('.page-header__wrap');

header.classList.remove('page-header--nojs');

mainNavToggle.addEventListener('click', function(e) {
  e.preventDefault();
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    pageHeaderWrap.classList.add('page-header__wrap--opened');
    header.classList.add('page-header--opened');
  }
  else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    pageHeaderWrap.classList.remove('page-header__wrap--opened');
    header.classList.remove('page-header--opened');
  }
});
