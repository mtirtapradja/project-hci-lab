$(document).ready(function(){
    $('#arrowleft').on('click',function(){
        console.log("Click Left");
        var currentDiv = $('.middle-container-items-active');
        var nextDiv = currentDiv.prev();

        if(nextDiv.length){
            currentDiv.removeClass('middle-container-items-active').css('z-index',-10);
            nextDiv.addClass('middle-container-items-active').css('z-index',10);
        }
    })
});

$(document).ready(function(){
    $('#arrowright').on('click',function(){
        console.log("Click Right");
        var currentDiv = $('.middle-container-items-active');
        var nextDiv = currentDiv.next();

        if(nextDiv.length){
            currentDiv.removeClass('middle-container-items-active').css('z-index',-10);
            nextDiv.addClass('middle-container-items-active').css('z-index',10);
        }
    })
});