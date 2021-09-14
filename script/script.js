const swiper = new Swiper(".swiper", {
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  centeredSlides: true,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let x = false;
const clicker = document.getElementById("menu-control");
const menu = document.getElementById("menu");
clicker.addEventListener("click", function () {
  if (!x) {
    menu.classList.add("active");
    x = true;
  } else {
    x = false;
    menu.classList.remove("active");
  }
});
