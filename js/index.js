var buttonMenu = document.querySelector('.page-header__button');
var buttonClose = document.querySelector('.button__close');
var headerWrap = document.querySelector('.page-header__wrap');
var mainNav = document.querySelector('.main-nav');
var priceList = document.querySelector('.price__list');
var slide1 = document.querySelector('.slider__toggle--1');
var slide2 = document.querySelector('.slider__toggle--2');
var slide3 = document.querySelector('.slider__toggle--3');


buttonMenu.addEventListener('click', function(evt) {
evt.preventDefault();
console.log("ПРивет");
headerWrap.classList.add('hide');
mainNav.classList.add('show');
});

buttonClose.addEventListener('click', function(evt) {
evt.preventDefault();
headerWrap.classList.remove('hide');
mainNav.classList.remove('show');
});

slide1.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceList.style.left="12%";
  slide1.classList.add('slider__toggle--active');
  slide2.classList.remove('slider__toggle--active');
  slide3.classList.remove('slider__toggle--active');
});

slide2.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceList.style.left="-45%";
  slide2.classList.add('slider__toggle--active');
  slide1.classList.remove('slider__toggle--active');
  slide3.classList.remove('slider__toggle--active');
});

slide3.addEventListener('click', function(evt) {
  evt.preventDefault();
  priceList.style.left="-112%";
  slide3.classList.add('slider__toggle--active');
  slide2.classList.remove('slider__toggle--active');
  slide1.classList.remove('slider__toggle--active');
});
