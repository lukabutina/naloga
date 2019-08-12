var headerEl = document.querySelector(".region-header");

headerEl.innerHTML +=
  '<button class="mobile-menu"><img src="/themes/adchallenge/images/hamburger.svg"></button>';

var mobileMenuBtEl = document.querySelector(".mobile-menu");
var mobileMenuEl = document.querySelector("header nav");

function onScrollEventHandler(ev) {
  var docViewTop = window.pageYOffset;
  if (docViewTop > 10) {
    headerEl.classList.add("scrolled");
  } else {
    headerEl.classList.remove("scrolled");
  }
}

function mobileMenu(ev) {
  var mobileMenuImg = document.querySelector(".mobile-menu img");
  if (mobileMenuEl.classList.contains("open")) {
    mobileMenuImg.src = "/themes/adchallenge/images/hamburger.svg";
  } else {
    mobileMenuImg.src = "/themes/adchallenge/images/cross.svg";
  }
  mobileMenuEl.classList.toggle("open");
}

if (mobileMenuBtEl.addEventListener)
  mobileMenuBtEl.addEventListener("click", mobileMenu, false);
if (window.addEventListener)
  window.addEventListener("scroll", onScrollEventHandler, false);
else if (window.attachEvent)
  window.attachEvent("onscroll", onScrollEventHandler);
