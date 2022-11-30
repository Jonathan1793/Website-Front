const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".hamburger");
const menuNav = document.querySelector(".nav-menu");

let showMenu = false;

navBtn.addEventListener("click", toggleMenu);
console.log("im here");

function toggleMenu() {
  if (!showMenu) {
    menuNav.classList.add("open");
    nav.classList.add("open");
    showMenu = true;
  } else {
    menuNav.classList.remove("open");
    nav.classList.remove("open");
    showMenu = false;
  }
}
