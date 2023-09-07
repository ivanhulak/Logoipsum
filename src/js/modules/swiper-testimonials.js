import Swiper from 'swiper/bundle';

const breakpoint = window.matchMedia('(max-width:1023px)');
let swiperHorizontal, swiperVertical;

const swiperVerticalConfig = {
   direction: 'vertical',
   slidesPerView: 'auto',
   speed: 4000,
   spaceBetween: '32px',
   a11y: false,
   freeMode: true,
   loop: true,
   autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
   },
   grabcursor: true,
}
const swiperHorizontalConfig = {
   slidesPerView: 'auto',
   speed: 4000,
   spaceBetween: '32px',
   a11y: false,
   freeMode: true,
   loop: true,
   autoplay: {
      delay: 0.0,
      disableOnInteraction: false,
   },
   grabcursor: true,
   breakpoints: {
      768: {
         slidesPerView: 2,
      },
   }
}

const breakpointChecker = function () {
   if (breakpoint.matches === true) {
      swiperHorizontal = new Swiper('.horizontal-swiper', swiperHorizontalConfig);
      if (swiperVertical !== undefined) swiperVertical.destroy(true, true);
      return;
   } else if (breakpoint.matches === false) {
      if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
      swiperVertical = new Swiper('.vertical-swiper', swiperVerticalConfig);
      return;
   }
};

breakpoint.addListener(breakpointChecker);
// kickstart
export default breakpointChecker;
