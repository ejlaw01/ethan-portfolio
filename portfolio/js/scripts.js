
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
  
  // $('#hey-im-ethan').mouseover(function(){
  //   $('#ethan-detail').css('display', 'block');
  // });
  // $('#hey-im-ethan').mouseout(function(){
  //   $('#ethan-detail').css('display', 'none');
  // });

});
