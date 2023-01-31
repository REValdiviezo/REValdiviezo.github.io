const buttonMenu = document.querySelector(".container__button-menu");
const ulNav = document.querySelector(".container__ulnav");

buttonMenu.addEventListener("click", () => {
    ulNav.classList.toggle("container__ulnav_visible");
});