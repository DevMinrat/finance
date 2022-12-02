const servicesSlider = new Swiper(".services-slider", {
  slidesPerView: "auto",
  spaceBetween: 60,

  //   navigation: {
  //     nextEl: ".intro-slider__btn-next",
  //     prevEl: ".intro-slider__btn-prev",
  //   },

  //   breakpoints: {
  //     900: {
  //       spaceBetween: 50,
  //     },
  //     1350: {
  //       slidesPerView: "auto",
  //       spaceBetween: 80,
  //     },
  //   },
});
const popularNavsSlider = new Swiper(".popular-nav", {
  slidesPerView: "auto",
  spaceBetween: 60,
});

const popularSliders = document.querySelectorAll(".popular-slider");

popularSliders.forEach((el) => {
  console.log(el.querySelector(".slider-nav_next"));
  new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 30,

    navigation: {
      nextEl: el.querySelector(".slider-nav_next"),
      prevEl: el.querySelector(".slider-nav_prev"),
    },
  });
});
