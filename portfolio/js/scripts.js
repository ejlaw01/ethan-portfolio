
// var developer = function() {
//   for (var day = 0; day < 7; day++) {
//     if (day < 5) {
//       alarm(snooze());
//       drinkMate(yerba.bitter, water.hot);
//       code(Javascript(JQuery || Angular2), HTML5, CSS3);
//       git(commit(""));
//     } else {
//       dAndD(roll(20));
//       goHiking(nature);
//       dance(beats);
//     }
//   }
// }


$(document).ready(function(){

  var counter = 1;
  $('#contact').click(function(){
    var self = this;
    if (counter%2 === 0) {
      $(".contact").fadeToggle('slow', function(){
        $(".title-detail").fadeToggle('slow');
        counter += 1;
      });
    } else {
      $(".title-detail").fadeToggle('slow', function(){
        $(".contact").fadeToggle('slow');
        counter += 1;
      });
    }
    console.log(counter);
  });


  $(document).on('click', 'a.scroll', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return;
  });


  $('#hey-im-ethan').click(function(){
    $('#ethan-detail').fadeIn('slow', function(){    });
  });
  $('#hey-im-ethan').mouseout(function(){
    $('#ethan-detail').fadeOut('slow', function(){});
  });

  $('#web-developer').click(function(){
    $('#dev-detail').fadeIn('slow', function(){});
  });
  $('#web-developer').mouseout(function(){
    $('#dev-detail').fadeOut('slow', function(){});
  });
  $('#portland-or').click(function(){
    $('.pdx-rider').addClass('ride');
  });



  $('.more').click(function(){
    var project = $(this).parents('.project-wrapper').attr('id');
    $('#' + project + '-title').addClass('spin');
    $('#' + project + '-title').children('svg, a.more').fadeOut(100);
    $('#' + project + '-info').fadeIn(800);
  });

  $('.close').click(function(){
    var project = $(this).parents('.project-wrapper').attr('id');
    $('#' + project + '-title').removeClass('spin');
    var reappear = function() {
      $('#' + project + '-title').children('svg, a.more').fadeIn(600);
    };
    window.setTimeout(reappear, 1000);
    $('#' + project + '-info').fadeOut(800);
  });

  //App Design Slider

  var sliderIndex = 1;
  $('.screens-wrapper').click(function(){
    var thisApp = $(this).parents('.design-wrapper').attr('id');
    var screensWrapper = $(this).attr('id');
    var numberOfScreens = $("#" + screensWrapper + " > img").length;


    if (sliderIndex >= numberOfScreens) {
      sliderIndex = 1;
    } else {
      sliderIndex +=1;
    }

    $("#" + screensWrapper + ' img').each(function() {
      if ($(this).attr('id') === thisApp + "-screen-" + sliderIndex) {
        $(this).css('display', 'block');
      } else {
        $(this).css('display', 'none');
      }
    });
  });


});
