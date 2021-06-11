$(document).ready(function () {
  let burger = $("#burgermenu");
  let navOnMobile = $("ul");
  let section = $("section");
  let windowSize = window.matchMedia("(max-width: 1000px)");

  burger.click(function () {
    // Kalo belom muncul
    if (navOnMobile.css("left") != "0px") {
      navOnMobile.css("left", "0");
      section.css("visibility", "hidden");
    } else {
      navOnMobile.css("left", "-100%");
      section.css("visibility", "visible");
    }
  });

  windowSize.addListener(function () {
    if (windowSize.matches) {
      section.css("left", "-100%");
      section.css("visibility", "visible");
    } else {
      navOnMobile.css("left", "-100%");
      section.css("visibility", "visible");
    }
  });
});
