// Select the hamburger button
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  if (navMenu.classList.contains("show")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>'; // X icon
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
  }
});
