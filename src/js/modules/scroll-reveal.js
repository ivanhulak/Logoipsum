import ScrollReveal from 'scrollreveal';

const breakpoint = window.matchMedia('(max-width:1024px)');

const ScrollRevealCheker = function () {
   if (breakpoint.matches === true) {
      ScrollReveal().destroy();
      return;
   } else if (breakpoint.matches === false) {
      ScrollReveal().reveal('.header', { origin: "top", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.discover__desc', { origin: "left", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.discover__picture', { origin: "right", distance: '60px', duration: 2800, reset: true, })
      ScrollReveal().reveal('.product__block--discover', { origin: "left", delay: 1000, distance: '60px', duration: 2800, reset: true, })
      ScrollReveal().reveal('.logotypes', { origin: "bottom", distance: '60px', duration: 2800, reset: true, })
      ScrollReveal().reveal('.popular__header', { origin: "right", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.container-right', { origin: "left", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.advantage__info', { origin: "left", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.advantage__gallery', { origin: "right", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.gallery-advantage__notify', { origin: "left", delay: 1000, distance: '60px', duration: 2800, reset: true, })
      ScrollReveal().reveal('.explore__picture', { origin: "left", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.explore__info', { origin: "right", distance: '60px', duration: 2800, reset: true })
      ScrollReveal().reveal('.product__block--explore', { origin: "right", delay: 1000, distance: '60px', duration: 2800, reset: true, })
      ScrollReveal().reveal('.explore__support', { origin: "left", delay: 1000, distance: '60px', duration: 2800, reset: true, })
      return;
   }
};

export default ScrollRevealCheker;