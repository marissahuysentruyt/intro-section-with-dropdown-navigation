import "./scss/styles.scss";
const template = require("./template.handlebars");

const openMobileMenuButton = document.querySelector(".js-mobile-menu__open-nav-button");
const closeMobileMenuButton = document.querySelector(".js-mobile-menu__close-nav-button");

// TODO: check if the window/viewport is 45rem to decide if we should show the large nav
// or small nav? would that help the button continuing to show if I click the menu before
// resizing?
// if(window.matchMedia("(min-width: 45rem)").matches) {
// openMobileMenuButton.setAttribute("aria-expanded", "true");
// openMobileMenuButton.style.display = "none";
// console.log("window");
// }

if (openMobileMenuButton) {
  const dialogId = openMobileMenuButton.getAttribute("aria-controls");
  const mobileMenu = document.getElementById(dialogId);
  openMobileMenuButton.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");

  const openMobileMenu = () => {
    mobileMenu.setAttribute("aria-hidden", "false");
    openMobileMenuButton.setAttribute("aria-expanded", "true");
    openMobileMenuButton.style.display = "none";
    closeMobileMenuButton.style.display = "block";
    // set the focus to the close button (especially to keep the beginning of content visible for long modals)
    const firstTabElementOfMenu = document.getElementById("close-button");
    firstTabElementOfMenu.focus();
  };

  const closeMobileMenu = () => {
    mobileMenu.setAttribute("aria-hidden", "true");
    openMobileMenuButton.setAttribute("aria-expanded", "false");
    closeMobileMenuButton.setAttribute("aria-expanded", "false");
    openMobileMenuButton.style.display = "block";
    closeMobileMenuButton.style.display = "none";
    openMobileMenuButton.focus();
    openMobileMenuButton.style.pointerEvents = "auto";
  };

  openMobileMenuButton.addEventListener("click", () => {
    openMobileMenu();
  });

  closeMobileMenuButton.addEventListener("click", () => {
    closeMobileMenu();
  });

  // pressing the escape key will close the mobile menu
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      closeMobileMenu();
    }
  });

  // clicking outside of the mobile menu closes it
  document.addEventListener("click", (e) => {
    if(!e.target.closest("#mobile-menu") &&
      e.target !== openMobileMenuButton &&
      mobileMenu.getAttribute("aria-hidden") === "false") {
      openMobileMenuButton.style.pointerEvents = "none";
      closeMobileMenu();
    }
  });

  // trap the focus inside the menu while open
  mobileMenu.addEventListener("keydown", (e) => {
    if(e.key !== "Tab" || e.keyCode !== 9) return;
    const focusableElements = document.querySelectorAll(".not-dropdown, .js-mobile-menu__close-nav-button, button[data-bs-toggle='dropdown']");
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    console.log(firstFocusableElement);
    if (e.shiftKey && document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
    // TODO: ^^^^ The tab focus trap works, but the shift+tab focus trap doesn't.
  });
};
