const btn = document.querySelector(".btn");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

btn.classList.toggle("btn--loading");
