document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav__list");

  hamburger.addEventListener("click", function () {
    navList.style.display =
      navList.style.display === "block" ? "none" : "block";
  });
});
