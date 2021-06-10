$(document).ready(function () {
  let burger = $("#burgermenu");
  let navOnMobile = $("ul");

  burger.click(function () {
    if (navOnMobile.css("left") != "0px") {
      navOnMobile.css("left", "0");
    } else {
      navOnMobile.css("left", "-100%");
    }
  });
});
