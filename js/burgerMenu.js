const navBar = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBar.onclick = function () {
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon-active');
};