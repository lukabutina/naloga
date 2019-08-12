var headerEl = document.querySelector(".region-header");

function onScrollEventHandler(ev) {
  var docViewTop = window.pageYOffset;
  if (docViewTop > 10) {
    headerEl.classList.add("scrolled");
  } else {
    headerEl.classList.remove("scrolled");
  }
}

if (window.addEventListener)
  window.addEventListener("scroll", onScrollEventHandler, false);
else if (window.attachEvent)
  window.attachEvent("onscroll", onScrollEventHandler);
