const menu = document.querySelector(".header__menu");
const menuOn = document.querySelector(".header__menuOn-ikon");
const closeMenu = document.querySelector(".header__close-ikon");
const tabLink = document.querySelectorAll(".about-place__link");
const tabImg = document.querySelectorAll(".about-place__tab-img");
const modalOn = document.querySelectorAll(".splide__slide");
const modalClose = document.querySelector(".freeApartment__modal-close-ikon");
const modal = document.querySelector(".freeApartment__modal");
const wrapperModal = document.querySelector(".freeApartment__wrapper");

menuOn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

closeMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(-100%)";
});

modalOn.forEach((elem) =>
  elem.addEventListener("click", () => {
    modal.style.transform = "translateY(0)";
    wrapperModal.style.height = "1343px";
  })
);

modalClose.addEventListener("click", () => {
  modal.style.transform = "translateY(-100%)";
  wrapperModal.style.height = "938px";
});

tabLink.forEach((link) =>
  link.addEventListener("click", (e) => {
    tabLink.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
    tabImg.forEach((img) => img.classList.remove("active"));
    tabImg.forEach((img) => {
      if (img.id === e.target.id) {
        img.classList.add("active");
      }
    });
  })
);

let outerSlider = new Splide(".freeApartment__main-slider", {
  arrows: true,
  wheel: true,
  drag: true,
  pagination: false,
  perPage: 3,
  speed: 700,
  perMove: 1,
  fixedWidth: "327px",
  width: "80%",
  wheelSleep: 50,
  gap: "80px",
});

outerSlider.mount();
