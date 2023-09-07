import Swiper from 'swiper/bundle';

function swiperPopular() {
   const swiper = new Swiper('.swiper-popular', {
      direction: 'horizontal',
      speed: 1000,
      autoHeight: true,
      autoplay: {
         delay: 5000,
      },
      grabcursor: true,
      draggable: true,
      slidesPerView: 'auto',
      freeMode: true,

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
}

export default swiperPopular;