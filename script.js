$(document).ready(function () {
  $("#arrowleft").on("click", function () {
    console.log("Click Left");
    var currentDiv = $(".middle-container-items.active");
    var prevDiv = currentDiv.prev();

    if (prevDiv.length) {
      currentDiv.removeClass("active").css("z-index", -10);
      prevDiv.addClass("active").css("z-index", 10);
    }
  });
});

$(document).ready(function () {
  $("#arrowright").on("click", function () {
    console.log("Click Right");
    var currentDiv = $(".middle-container-items.active");
    var nextDiv = currentDiv.next();

    if (nextDiv.length) {
      currentDiv.removeClass("active").css("z-index", -10);
      nextDiv.addClass("active").css("z-index", 10);
    }
  });
});
