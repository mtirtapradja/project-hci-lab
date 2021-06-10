$(document).ready(function(){
  let fields = $('.middle-container-item');
  let media4 = window.matchMedia('(max-width: 1800px)');
  let media3 = window.matchMedia('(max-width: 1300px)');
  let media2 = window.matchMedia('(max-width: 900px)');
  let media1 = window.matchMedia('(max-width: 400px)');

  let currentIndex = 0;
  let targetIndex = 4;
  
  for(i=targetIndex ; i<fields.length ; i++){
    fields.eq(i).hide();
  }

  media3.addListener(function(){
    if(media3.matches){
      targetIndex -= 1;
    }else{
      fields.eq(targetIndex).css('opacity','1');
      fields.eq(targetIndex).css('left','0%');
      fields.eq(targetIndex).show();
      targetIndex+=1;
      if(targetIndex===fields.length){
        fields.eq(currentIndex).css('opacity','1');
        fields.eq(currentIndex).css('left','0%');
        fields.eq(currentIndex).show();
        currentIndex -=1;
      }
    }
    for(i=targetIndex ; i<fields.length ; i++){
      fields.eq(i).hide();
    }
  });

  media2.addListener(function(){
    if(media2.matches){
      targetIndex -= 1;
    }else{
      fields.eq(targetIndex).css('opacity','1');
      fields.eq(targetIndex).css('left','0%');
      fields.eq(targetIndex).show();
      targetIndex += 1;
    }
    for(i=targetIndex ; i<fields.length ; i++){
      fields.eq(i).hide();
    }
  });

  media1.addListener(function(){
    if(media1.matches){
      targetIndex -= 1;
    }else{
      fields.eq(targetIndex).css('opacity','1');
      fields.eq(targetIndex).css('left','0%');
      fields.eq(targetIndex).show();
      targetIndex += 1;
    }
    for(i=targetIndex ; i<fields.length ; i++){
      fields.eq(i).hide();
    }
  });



  $('#arrowleft1').on('click',function(){
    if(currentIndex>0){
      fields.eq(targetIndex-1).animate({
        left: '25%',
        opacity: 0
      },500,function(){
        fields.eq(targetIndex-2).animate({
          left: '25%'
        },500,function(){
          fields.eq(targetIndex-3).animate({
            left: '25%'
          },500,function(){
            fields.eq(targetIndex-4).animate({
              left: '25%'
            },500,function(){
              fields.eq(targetIndex-1).hide();
              for(j=currentIndex-1 ; j<targetIndex-1 ; j++){
                fields.eq(j).css('left','0%');
              }
              currentIndex -=1;
              targetIndex -=1;
              fields.eq(currentIndex).show();
              fields.eq(currentIndex).css('left','-25%');
              fields.eq(currentIndex).css('opacity','0');
              fields.eq(currentIndex).animate({
                left: '0%',
                opacity: 1
              },500);
            })
           }); 
        });
      });
    }
  });

  $('#arrowright1').on('click',function(){
    if(targetIndex+1<=fields.length){
      fields.eq(currentIndex).animate({
        left: '-25%',
        opacity: 0
      },500,function(){
        fields.eq(currentIndex+1).animate({
          left: '-25%'
        },500,function(){
          fields.eq(currentIndex+2).animate({
            left: '-25%'
          },500,function(){
            fields.eq(currentIndex+3).animate({
              left: '-25%'
            },500,function(){
              fields.eq(currentIndex).hide();
              for(j=currentIndex+1 ; j<targetIndex ; j++){
                fields.eq(j).css('left','0%');
              }
              currentIndex +=1;
              targetIndex +=1;
              fields.eq(targetIndex-1).show();
              fields.eq(targetIndex-1).css('left','25%');
              fields.eq(targetIndex-1).css('opacity','0');
              fields.eq(targetIndex-1).animate({
                left: '0%',
                opacity: 1
              },500);
            })
           }); 
        });
      });
    }
  });

  $('#arrowleft2').on('click',function(){
    if(currentIndex>0){
      fields.eq(targetIndex-1).animate({
        left: '33%',
        opacity: 0
      },500,function(){
        fields.eq(targetIndex-2).animate({
          left: '33%'
        },500,function(){
          fields.eq(targetIndex-3).animate({
            left: '33%'
          },500,function(){
            fields.eq(targetIndex-1).hide();
            for(j=currentIndex-1 ; j<targetIndex-1 ; j++){
              fields.eq(j).css('left','0%');
            }
            currentIndex -=1;
            targetIndex -=1;
            fields.eq(currentIndex).show();
            fields.eq(currentIndex).css('left','-33%');
            fields.eq(currentIndex).css('opacity','0');
            fields.eq(currentIndex).animate({
              left: '0%',
              opacity: 1
            },500);
          })
        }); 
      });
    }
  });

  $('#arrowright2').on('click',function(){
    if(targetIndex+1<=fields.length){
      fields.eq(currentIndex).animate({
        left: '-33%',
        opacity: 0
      },500,function(){
        fields.eq(currentIndex+1).animate({
          left: '-33%'
        },500,function(){
          fields.eq(currentIndex+2).animate({
            left: '-33%'
          },500,function(){
            fields.eq(currentIndex).hide();
            for(j=currentIndex+1 ; j<targetIndex ; j++){
              fields.eq(j).css('left','0%');
            }
            currentIndex +=1;
            targetIndex +=1;
            fields.eq(targetIndex-1).show();
            fields.eq(targetIndex-1).css('left','33%');
            fields.eq(targetIndex-1).css('opacity','0');
            fields.eq(targetIndex-1).animate({
              left: '0%',
              opacity: 1
            },500);
          })
        }); 
      });
    }
  });

});


function movePage(path){
  window.location.href = path;
}
