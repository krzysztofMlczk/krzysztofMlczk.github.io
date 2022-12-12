const openMobileMenu = () => {
  document
    .querySelector(".mobile-menu")
    .classList.remove("mobile-menu--closed");
};

const closeMobileMenu = () => {
  document.querySelector(".mobile-menu").classList.add("mobile-menu--closed");
};
