
//burgerMenu
const navBar = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu--mobile')

navBar.onclick = function () {
  menu.classList.toggle('hidden');
  // home.classList.toggle('menu--mobile');
  menuIcon.classList.toggle('menu-icon-active');
};



