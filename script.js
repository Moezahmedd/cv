document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js

  // Navigation toggle logic
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".right");

  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Listener for clicks outside the nav menu
  document.addEventListener("click", function (event) {
    if (
      !navMenu.contains(event.target) &&
      navMenu.classList.contains("active")
    ) {
      navMenu.classList.remove("active");
    }
  });

  // Prevent the document click listener from firing when clicking on the navToggle
  navToggle.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  var typed = new Typed("#element", {
    strings: [
      "Cybersecurity enthusiast",
      "Programmer",
      "Content writer",
      "Web developer",
    ],
    typeSpeed: 55,
  });

});
