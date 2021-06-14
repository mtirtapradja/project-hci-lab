$(document).ready(function () {
  $(".image").click(function () {
    $("#showImage").fadeOut(1000, function () {
      $(this).attr("src", url).fadeIn(1000);
    });
  });

  $("#arrowleft").on("click", function () {
    console.log("Click Left");
    var currentDiv = $(".image.active");
    var prevDiv = currentDiv.prev();

    if (prevDiv.length > 3) {
      currentDiv.removeClass("active").css("z-index", -10);
      prevDiv.addClass("active").css("z-index", 10);
    }
  });

  $("#arrowright").on("click", function () {
    console.log("Click Right");
    var currentDiv = $(".image.active");
    var nextDiv = currentDiv.next();

    if (nextDiv.length > 3) {
      currentDiv.removeClass("active").css("z-index", -10);
      nextDiv.addClass("active").css("z-index", 10);
    }
  });
});

function setUrl(path) {
  url = path;
}

function movePage(path){
  window.location.href = path;
}
