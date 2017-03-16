
// var developer = function() {
//   for (var day = 0; day < 7; day++) {
//     if (day <= 5) {
//       alarm(hitSnooze());
//       drinkMate(yerba.bitter, water.hot);
//       code(Javascript(JQuery || Angular2), HTML5, CSS3);
//     } else {
//       dAndD(roll(20));
//       goHiking(nature);
//       dance(beats);
//     }
//   }
// }


$(document).ready(function(){

  var viewHeight = parseInt($(window).height());

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

  $(document).on('click', 'a.scroll', function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top+.5
    }, 500);
  });

  // $(window).scroll(function() {
  //   if (parseInt($(window).scrollTop()) > viewHeight*2) {
  //   }
  // });

  $('#hey-im-ethan').click(function(){
    $('#ethan-detail').fadeIn('slow', function(){    });
  });
  $('#hey-im-ethan').mouseout(function(){
    $('#ethan-detail').fadeOut('slow', function(){});
  });

  $('#web-developer').click(function(){
    $('#dev-detail').fadeIn('slow', function(){    });
  });
  $('#web-developer').mouseout(function(){
    $('#dev-detail').fadeOut('slow', function(){});
  });

});
