$(document).ready(function(){
  let fields = $('.middle-container-item');
  let media3 = window.matchMedia('(max-width: 1500px)');
  let media2 = window.matchMedia('(max-width: 1000px)');
  let media1 = window.matchMedia('(max-width: 800px)');

  let currentIndex = 0;
  let targetIndex = 4;

  let width = $(window).width();
  
  if(width<800){
    fields.css('height','13em');
    targetIndex = 1;
  }else
  if(width<1000){
    fields.css('height','17em');
    targetIndex = 2;
  }else
  if(width<1500){
    fields.css('height','20em');
    targetIndex = 3;
  }

  for(i=targetIndex ; i<fields.length ; i++){
    fields.eq(i).hide();
  }

  media3.addListener(function(){
    if(media3.matches){
      fields.css('height','20em');
      targetIndex -= 1;
    }else{
      if(targetIndex===fields.length){
        currentIndex -=1;
        fields.eq(currentIndex).css('opacity','1');
        fields.eq(currentIndex).css('left','0%');
        fields.eq(currentIndex).show();  
      }else{
        fields.eq(targetIndex).css('opacity','1');
        fields.eq(targetIndex).css('left','0%');
        fields.eq(targetIndex).show();
        targetIndex+=1;
      }
      fields.css('height','23em');
    }
    for(i=targetIndex ; i<fields.length ; i++){
      fields.eq(i).hide();
    }
  });

  media2.addListener(function(){
    if(media2.matches){
      fields.css('height','17em');
      targetIndex -= 1;
    }else{
      if(targetIndex===fields.length){
        currentIndex -=1;
        fields.eq(currentIndex).css('opacity','1');
        fields.eq(currentIndex).css('left','0%');
        fields.eq(currentIndex).show();
      }else{
        fields.eq(targetIndex).css('opacity','1');
        fields.eq(targetIndex).css('left','0%');
        fields.eq(targetIndex).show();
        targetIndex += 1;
      }
      fields.css('height','20em');
    }
    for(i=targetIndex ; i<fields.length ; i++){
      fields.eq(i).hide();
    }
  });

  media1.addListener(function(){
    if(media1.matches){
      fields.css('height','13em');
      targetIndex -= 1;
    }else{
      if(targetIndex===fields.length){
        currentIndex -=1;
        fields.eq(currentIndex).css('opacity','1');
        fields.eq(currentIndex).css('left','0%');
        fields.eq(currentIndex).show();
      }else{
        fields.eq(targetIndex).css('opacity','1');
        fields.eq(targetIndex).css('left','0%');
        fields.eq(targetIndex).show();
        targetIndex += 1;
      }
      fields.css('height','17em');
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
            });
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
            });
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
          });
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
          });
        }); 
      });
    }
  });

  $('#arrowleft3').on('click',function(){
    if(currentIndex>0){
      fields.eq(targetIndex-1).animate({
        left: '50%',
        opacity: 0
      },500,function(){
        fields.eq(targetIndex-2).animate({
          left: '50%'
        },500,function(){
          fields.eq(targetIndex-1).hide();
          for(j=currentIndex-1 ; j<targetIndex-1 ; j++){
            fields.eq(j).css('left','0%');
          }
          currentIndex -=1;
          targetIndex -=1;
          fields.eq(currentIndex).show();
          fields.eq(currentIndex).css('left','-50%');
          fields.eq(currentIndex).css('opacity','0');
          fields.eq(currentIndex).animate({
            left: '0%',
            opacity: 1
          },500);
        });
      }); 
    }
  });

  $('#arrowright3').on('click',function(){
    if(targetIndex+1<=fields.length){
      fields.eq(currentIndex).animate({
        left: '-50%',
        opacity: 0
      },500,function(){
        fields.eq(currentIndex+1).animate({
          left: '-50%'
        },500,function(){
            fields.eq(currentIndex).hide();
            for(j=currentIndex+1 ; j<targetIndex ; j++){
              fields.eq(j).css('left','0%');
            }
            currentIndex +=1;
            targetIndex +=1;
            fields.eq(targetIndex-1).show();
            fields.eq(targetIndex-1).css('left','50%');
            fields.eq(targetIndex-1).css('opacity','0');
            fields.eq(targetIndex-1).animate({
              left: '0%',
              opacity: 1
            },500);
          }); 
      });
    }
  });

  $('#arrowleft4').on('click',function(){
    if(currentIndex>0){
      fields.eq(targetIndex-1).animate({
        left: '100%',
        opacity: 0
      },500,function(){
        fields.eq(targetIndex-1).hide();
        for(j=currentIndex-1 ; j<targetIndex-1 ; j++){
          fields.eq(j).css('left','0%');
        }
        currentIndex -=1;
        targetIndex -=1;
        fields.eq(currentIndex).show();
        fields.eq(currentIndex).css('left','-100%');
        fields.eq(currentIndex).css('opacity','0');
        fields.eq(currentIndex).animate({
          left: '0%',
          opacity: 1
        },500);
      }); 
    }
  });

  $('#arrowright4').on('click',function(){
    if(targetIndex+1<=fields.length){
      fields.eq(currentIndex).animate({
        left: '-100%',
        opacity: 0
      },500,function(){
          fields.eq(currentIndex).hide();
          for(j=currentIndex+1 ; j<targetIndex ; j++){
            fields.eq(j).css('left','0%');
          }
          currentIndex +=1;
          targetIndex +=1;
          fields.eq(targetIndex-1).show();
          fields.eq(targetIndex-1).css('left','100%');
          fields.eq(targetIndex-1).css('opacity','0');
          fields.eq(targetIndex-1).animate({
            left: '0%',
            opacity: 1
          },500);
        }); 
      }
  });
});


function movePage(path){
  window.location.href = path;
}
