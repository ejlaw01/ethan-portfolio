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
      scrollTop: $( $.attr(this, 'href') ).offset().top+1
    }, 500);
  });
});


// $(window).load(function() {
//     var InfiniteRotator =
//     {
//         init: function()
//         {
//             var initialFadeIn = 1000;
//             var itemInterval = 5000;
//             var fadeTime = 2500;
//             var numberOfItems = $('.rotating-picture').length;
//             var currentItem = 0;
//
//             $('.rotating-picture').eq(currentItem).fadeIn(initialFadeIn);
//
//             var infiniteLoop = setInterval(function() {
//                 $('.rotating-picture').eq(currentItem).fadeOut(fadeTime);
//                 if (currentItem == numberOfItems -1) {
//                     currentItem = 0;
//                 } else {
//                     currentItem++;
//                 }
//                 $('.rotating-picture').eq(currentItem).fadeIn(fadeTime);
//             }, itemInterval);
//         }
//     };
//     InfiniteRotator.init();
// });
