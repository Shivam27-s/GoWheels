// Menu Button Interaction
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const toggleMenu = () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
};

const closeMenu = () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
};

menuBtn.addEventListener("click", toggleMenu);
navLinks.addEventListener("click", closeMenu);

// ScrollReveal Configuration
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const revealElements = [
  { selector: ".header__image img", options: { ...scrollRevealOptions, origin: "right" } },
  { selector: ".header__content h1", options: { ...scrollRevealOptions, delay: 500 } },
  { selector: ".header__content p", options: { ...scrollRevealOptions, delay: 1000 } },
  { selector: ".header__links", options: { ...scrollRevealOptions, delay: 1500 } },
  { selector: ".steps__card", options: { ...scrollRevealOptions, interval: 500 } },
  { selector: ".service__image img", options: { ...scrollRevealOptions, origin: "left" } },
  { selector: ".service__content .section__subheader", options: { ...scrollRevealOptions, delay: 500 } },
  { selector: ".service__content .section__header", options: { ...scrollRevealOptions, delay: 1000 } },
  { selector: ".service__list li", options: { ...scrollRevealOptions, delay: 1500, interval: 500 } },
  { selector: ".experience__card", options: { duration: 1000, interval: 500 } },
  { selector: ".download__image img", options: { ...scrollRevealOptions, origin: "right" } },
  { selector: ".download__content .section__header", options: { ...scrollRevealOptions, delay: 500 } },
  { selector: ".download__content p", options: { ...scrollRevealOptions, delay: 1000 } },
  { selector: ".download__links", options: { ...scrollRevealOptions, delay: 1500 } },
];

revealElements.forEach(({ selector, options }) => {
  ScrollReveal().reveal(selector, options);
});
