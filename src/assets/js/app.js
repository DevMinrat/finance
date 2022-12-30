//= ../../../node_modules/swiper/swiper-bundle.js
//= ../../../node_modules/choices.js/public/assets/scripts/choices.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/scrollLock.js
  //= components/sliders.js

  // header functional

  const header = document.querySelector(".header");
  let scrollPrev = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      let scrolled = document.documentElement.scrollTop;

      if (scrolled > 50 && scrolled > scrollPrev) {
        header.classList.add("out");
      } else {
        header.classList.remove("out");
      }

      if (scrolled <= 50) {
        header.classList.add("top");
      } else {
        header.classList.remove("top");
      }

      scrollPrev = scrolled;
    });

    if (document.documentElement.scrollTop <= 50) {
      header.classList.add("top");
    }

    const burger = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burger.addEventListener("click", () => {
      burger.classList.toggle("menu-on");
      menu.classList.toggle("active");

      if (burger.classList.contains("menu-on")) {
        scrollLock.disablePageScroll();
      } else {
        scrollLock.enablePageScroll();
      }
    });
  }

  const headerSearchBtn = document.querySelector(".header-search-btn");
  const headerSearch = document.querySelector(".header-search__wrapper");

  if (headerSearchBtn) {
    headerSearchBtn.addEventListener("click", (e) => {
      e.preventDefault();

      headerSearchBtn.classList.toggle("active");
      headerSearch.classList.toggle("active");
    });

    // document.documentElement.addEventListener("click", (e) => {
    //   let t = e.target;

    //   if (!headerSearch.contains(t)) {
    //     headerOther.classList.remove("active");
    //     menu.classList.remove("hide");
    //     headerLogo.classList.remove("mob-search");
    //   }
    // });
  }

  // inputs

  const simpleSelect = document.querySelectorAll(".simple-select");

  if (simpleSelect.length) {
    simpleSelect.forEach((el) => {
      new Choices(el, {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: "",
      });
    });
  }

  // tabs

  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs =
        typeof target === "string" ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll(".tabs-btn");
      this._elPanes = this._elTabs.querySelectorAll(".tabs-pane");
      this._eventShow = new Event("tab.itc.change");
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute("role", "tablist");
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute("role", "tab");
        this._elPanes[index].setAttribute("role", "tabpanel");
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector(".tabs-btn_active");
      const elPaneShow = this._elTabs.querySelector(".tabs-pane_show");
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove("tabs-btn_active") : null;
      elPaneShow ? elPaneShow.classList.remove("tabs-pane_show") : null;
      elLinkTarget.classList.add("tabs-btn_active");
      elPaneTarget.classList.add("tabs-pane_show");
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    }
    _events() {
      this._elTabs.addEventListener("click", (e) => {
        const target = e.target.closest(".tabs-btn");
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }
  // new ItcTabs(".tabs");
  const tabs = document.querySelectorAll(".tabs");

  if (tabs.length) {
    tabs.forEach((el) => {
      new ItcTabs(el);
    });
  }

  // modal functioal

  const modalTriggers = document.querySelectorAll("[data-modal]");

  if (modalTriggers.length > 0) {
    modalTriggers.forEach((el) => {
      el.addEventListener("click", () => {
        let modalName = el.dataset.modal;
        let modal = document.querySelector(`[data-modalName='${modalName}']`);

        modal.classList.remove("hide");
        scrollLock.disablePageScroll();
      });
    });
  }

  const modals = document.querySelectorAll(".modal");

  if (modals.length > 0) {
    modals.forEach((el) => {
      el.querySelector("[data-close]").addEventListener("click", () => {
        el.classList.add("hide");
        scrollLock.enablePageScroll();
      });
    });
  }

  // accordeon

  const faqAccTitle = document.querySelectorAll(".faq__item-title"),
    faqAccText = document.querySelectorAll(".faq__item-descr");

  if (faqAccTitle.length > 0) {
    for (let i = 0; i < faqAccTitle.length; i++) {
      faqAccTitle[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = faqAccText[i];

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  // table sorting

  const getCellValue = (tr, idx) =>
    tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValue(asc ? a : b, idx),
      getCellValue(asc ? b : a, idx)
    );

  function changeArrows(i, th) {
    if (i === 0) {
      document.querySelectorAll("th").forEach((el) => {
        el.classList.remove("sort-up", "sort-down");
      });
    } else {
      if (th.classList.contains("sort-down")) {
        th.classList.remove("sort-down");
        th.classList.add("sort-up");
      } else {
        th.classList.add("sort-down");
        th.classList.remove("sort-up");
      }
    }
  }

  document.querySelectorAll("th").forEach((th, i) =>
    th.addEventListener("click", () => {
      const table = th.closest("table");
      changeArrows(i, th);

      Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((tr) => table.appendChild(tr));
    })
  );

  // bank rating stars

  const bankRatStars = document.querySelectorAll(".item-rating_stars");

  if (bankRatStars.length) {
    bankRatStars.forEach((el) => {
      const bankRating = getComputedStyle(el).getPropertyValue("--rat-val");
      el.querySelectorAll("svg").forEach((el, i) => {
        if (i >= bankRating) {
          el.classList.add("empty");
        }
      });
    });
  }

  // sort dropdown

  const sorts = document.querySelectorAll(".sort");

  if (sorts.length) {
    const sortsPlaceholder = document.querySelectorAll(".sort-placeholder");
    const sortsDropdown = document.querySelectorAll(".sort-dropdown");
    const sortsLinks = document.querySelectorAll(".sort-link");

    sortsPlaceholder.forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("active");
        el.nextElementSibling.classList.toggle("active");
      });
    });

    sortsDropdown.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;

        sortsLinks.forEach((item) => {
          if (item != target) {
            item.classList.remove("sort-up", "sort-down");
          }
        });

        if (target.classList.contains("sort-down")) {
          target.classList.remove("sort-down");
          target.classList.add("sort-up");
        } else {
          target.classList.add("sort-down");
          target.classList.remove("sort-up");
        }
      });
    });
  }

  // filter dropdown

  const filter = document.querySelector(".filter");

  if (filter) {
    const filterPlaceholder = document.querySelector(".filter-placeholder");

    filterPlaceholder.addEventListener("click", () => {
      filterPlaceholder.classList.toggle("active");
      filterPlaceholder.nextElementSibling.classList.toggle("active");
    });
  }

  const dictionaryDots = document.querySelectorAll(
    ".dictionary-letter__item-dots"
  );

  if (dictionaryDots.length) {
    dictionaryDots.forEach((el) => {
      el.addEventListener("click", () => {
        el.style.display = "none";
        el.nextElementSibling.classList.remove("hide");
      });
    });
  }

  // services rolled tabs

  const servicesItemsBtn = document.querySelector(".services-item__more-btn");
  const servicesInfoInner = document.querySelector(".services-info__inner");
  const servicesInfo = document.querySelector(".services-info");

  if (servicesItemsBtn) {
    servicesItemsBtn.addEventListener("click", () => {
      servicesItemsBtn.classList.toggle("active");
      servicesInfoInner.classList.toggle("hide");
      servicesInfo.classList.toggle("active");
    });
  }
});
