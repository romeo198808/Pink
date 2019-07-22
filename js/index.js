var mainNavToggle = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav');
var header = document.querySelector('header');
var pageHeaderWrap = document.querySelector('.page-header__wrap');
var sliderToggle1 = document.querySelector('.slider__toggle--1');
var sliderToggle2 = document.querySelector('.slider__toggle--2');
var sliderToggle3 = document.querySelector('.slider__toggle--3');
var priceTable = document.querySelector('.price__table');
var reviewsToggle1 = document.querySelector('.slider__toggle--one');
var reviewsToggle2 = document.querySelector('.slider__toggle--twoo');
var reviewsToggle3 = document.querySelector('.slider__toggle--three');
var reviewsItem1 = document.querySelector('.reviews__item--1');
var reviewsItem2 = document.querySelector('.reviews__item--2');
var reviewsItem3 = document.querySelector('.reviews__item--3');

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

sliderToggle1.addEventListener('click', function(e) {
  e.preventDefault();
  sliderToggle1.classList.add('slider__toggle--active');
  priceTable.style.left = "0";
  sliderToggle2.classList.remove('slider__toggle--active');
  sliderToggle3.classList.remove('slider__toggle--active');
});

sliderToggle2.addEventListener('click', function(e) {
  e.preventDefault();
  sliderToggle2.classList.add('slider__toggle--active');
  priceTable.style.left = "-258px";
  sliderToggle1.classList.remove('slider__toggle--active');
  sliderToggle3.classList.remove('slider__toggle--active');
});

sliderToggle3.addEventListener('click', function(e) {
  e.preventDefault();
  sliderToggle3.classList.add('slider__toggle--active');
  priceTable.style.left = "-516px";
  sliderToggle2.classList.remove('slider__toggle--active');
  sliderToggle1.classList.remove('slider__toggle--active');
});

reviewsToggle1.addEventListener('click', function(e) {
  e.preventDefault();
  reviewsItem1.classList.add('reviews__item--show');
  reviewsItem2.classList.remove('reviews__item--show');
  reviewsItem3.classList.remove('reviews__item--show');
  reviewsToggle1.classList.add('slider__toggle--active');
  reviewsToggle2.classList.remove('slider__toggle--active');
  reviewsToggle3.classList.remove('slider__toggle--active');
});

reviewsToggle2.addEventListener('click', function(e) {
  e.preventDefault();
  reviewsItem2.classList.add('reviews__item--show');
  reviewsItem1.classList.remove('reviews__item--show');
  reviewsItem3.classList.remove('reviews__item--show');
  reviewsToggle2.classList.add('slider__toggle--active');
  reviewsToggle1.classList.remove('slider__toggle--active');
  reviewsToggle3.classList.remove('slider__toggle--active');
});

reviewsToggle3.addEventListener('click', function(e) {
  e.preventDefault();
  reviewsItem3.classList.add('reviews__item--show');
  reviewsItem2.classList.remove('reviews__item--show');
  reviewsItem1.classList.remove('reviews__item--show');
  reviewsToggle3.classList.add('slider__toggle--active');
  reviewsToggle2.classList.remove('slider__toggle--active');
  reviewsToggle1.classList.remove('slider__toggle--active');
});
