$(document).ready(function () {
  let burger = $("#burgermenu");
  let navOnMobile = $("ul");
  let section = $("section");

  burger.click(function () {
    if (navOnMobile.css("left") != "0px") {
      navOnMobile.css("left", "0");
      section.css("visibility", "hidden");
    } else {
      navOnMobile.css("left", "-100%");
      section.css("visibility", "visible");
    }
  });
});
