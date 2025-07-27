const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  }
});
