const navBar = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBar.onclick = function () {
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon-active');
};

// document.querySelector('.menu-icon-wrapper').onclick = function(){
//   document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
// }