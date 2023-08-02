/* Swiper slider */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

/* Burder */

let menuBtn = document.querySelector('.nav__menu-btn');
let menu = document.querySelector('.nav');
const body = document.body;
menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('noscroll')
})