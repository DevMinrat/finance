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

  breakpoints: {
    200: {
      spaceBetween: 10,
    },
    501: {
      spaceBetween: 30,
    },
    921: {
      spaceBetween: 60,
    },
  },
});

const popularSliders = document.querySelectorAll(".popular-slider");

popularSliders.forEach((el) => {
  new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 30,

    navigation: {
      nextEl: el.querySelector(".slider-nav_next"),
      prevEl: el.querySelector(".slider-nav_prev"),
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      501: {
        slidesPerView: "auto",
      },
    },
  });
});

const similarBanksSlider = new Swiper(".similar-banks__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,

  navigation: {
    nextEl: ".slider-nav_next",
    prevEl: ".slider-nav_prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    501: {
      slidesPerView: "auto",
    },
  },
});

const lastReviewsSlider = new Swiper(".last-reviews__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,

  navigation: {
    nextEl: ".slider-nav_next",
    prevEl: ".slider-nav_prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    501: {
      slidesPerView: 2,
    },
    921: {
      slidesPerView: "auto",
    },
  },
});
const bankQuestionsSlider = new Swiper(".bank-questions__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,

  navigation: {
    nextEl: ".slider-nav_next",
    prevEl: ".slider-nav_prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    501: {
      slidesPerView: 2,
    },
    921: {
      slidesPerView: "auto",
    },
  },
});

const newNewsSlider = new Swiper(".new-news__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,

  navigation: {
    nextEl: ".slider-nav_next",
    prevEl: ".slider-nav_prev",
  },
});

const mnewsNavsSlider = new Swiper(".mnews-nav", {
  slidesPerView: "auto",
  spaceBetween: 60,

  breakpoints: {
    200: {
      spaceBetween: 10,
    },
    501: {
      spaceBetween: 30,
    },
    921: {
      spaceBetween: 60,
    },
  },
});

const commonNavsSlider = new Swiper(".common-info__navs", {
  slidesPerView: "auto",
  spaceBetween: 60,

  breakpoints: {
    200: {
      spaceBetween: 10,
    },
    501: {
      spaceBetween: 30,
    },
    921: {
      spaceBetween: 60,
    },
  },
});
