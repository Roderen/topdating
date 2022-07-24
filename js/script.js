// Burger
const burgerBtn = document.querySelector('.header__burger'),
  burgerMenu = document.querySelector('.burger__menu');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__menu-active')
  burgerBtn.classList.toggle('header__burger-active')
})




// All sliders
const sliderThumbs = new Swiper('.second__swiper-numbers', {
  direction: 'vertical',
  mousewheel: true,
  spaceBetween: 20,
  slidesPerView: 'auto',
  centerInsufficientSlides: true,
  centeredSlidesBounds: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,

  breakpoints: {
    1300: {
      spaceBetween: 90,
      direction: 'vertical',
    },

    411: {
      spaceBetween: 30,
      direction: 'horizontal',
    },

    360: {
      spaceBetween: 20,
      direction: 'horizontal',
    },

    320: {
      spaceBetween: 10,
      direction: 'horizontal',
    }
  }
});

const mainSlider = new Swiper('.main__slider', {
  direction: 'vertical',
  speed: 600,
  slidesPerView: 1,
  mousewheel: true,
  allowTouchMove: true,
  allowSlidePrev: false,

  navigation: {
    nextEl: '.main__slider-next',
  },

  on: {
    slideChange: function () {
      mainSlider.allowTouchMove = false;
      const firstSlide = document.querySelector('.intro');
      const header = document.querySelector('header');
      const highlights = document.querySelector('.highlights');
      const swiperNumbers = document.querySelector('.second__swiper-numbers');
      const body = document.body;

      firstSlide.classList.add('intro-animate');
      highlights.classList.add('highlights-animate');
      swiperNumbers.classList.add('second__swiper-numbers-active');
      if (window.screen.width <= 1370) {
        body.style.overflowY = 'scroll';
      } else {
        body.style.overflowY = 'hidden';
      }

      if (firstSlide.classList.contains('intro-animate')) {
        mainSlider.mousewheel.disable()
      }
    },
  }
});

const secondSlider = new Swiper('.second__slider', {
  direction: 'vertical',
  speed: 600,
  mousewheel: true,
  slidesPerView: 'auto',

  thumbs: {
    swiper: sliderThumbs
  },

  breakpoints: {
    1440: {
      spaceBetween: 100,
      direction: 'vertical',
    },

    1366: {
      spaceBetween: 100,
      direction: 'horizontal',
      mousewheel: false,
    },

    1280: {
      autoHeight: true,
      spaceBetween: 100,
      mousewheel: true,
      
      direction: 'horizontal',
    },

    320: {
      autoHeight: true,
      spaceBetween: 100,
      mousewheel: true,
      
      direction: 'horizontal',
    },
  }
});