document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav__list");

  hamburger.addEventListener("click", function () {
    navList.style.display =
      navList.style.display === "block" ? "none" : "block";
  });

  // Smooth scroll functionality for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Logic to close the navList, if it's open, when an item is clicked
      if (navList.style.display === "block") {
        navList.style.display = "none";
      }

      // Scroll smoothly to the target element
      const targetElement = document.querySelector(this.getAttribute("href"));
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
