var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      576: {
            slidesPerView: 2,
          },
      '@1.5': {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });