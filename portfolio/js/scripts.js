$(document).ready(function(){
  $("#contact").click(function(){
    $(".title-detail").fadeOut('slow', function(){
      $(".contact").fadeIn('slow');
    });
  });
  // , function(){
  //   $(".contact").fadeOut('fast', function(){
  //     $(".title-detail").fadeIn();
  //   });
  // });
});
