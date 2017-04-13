
// var developer = function() {
//   for (var day = 0; day < 7; day++) {
//     if (day < 5) {
//       alarm(snooze());
//       drinkMate(yerba.bitter, water.hot);
//       code(Javascript(JQuery || Angular2), HTML5, CSS3);
//       git(commit("fix all the bugs"));
//     } else {
//       dAndD(roll(20));
//       goHiking(nature);
//       dance(beats);
//     }
//   }
// }

// function inPagePathing(){
//   var scrollPosition = $( $.attr(this, 'href') ).offset().top;
//   var pageSection = $(this).attr('href');
//   var url = pageSection.substr(1).slice(0, -8);
//   console.log(scrollPosition + " " + url);
//   location.hash = "#" + url + "-section";
//   history.replaceState("", "", url);
// }

$(document).ready(function(){

  var didScroll;
  var lastScrollTop = 0;
  var delta = 30;
  var navbarHeight = $('#menu-burger').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('#menu-burger').removeClass('nav-up').addClass('nav-down');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('#menu-burger').removeClass('nav-down').addClass('nav-up');
          }
      }

      lastScrollTop = st;
  }

  $(document).on('click', 'a.scroll', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    var scrollPosition = $( $.attr(this, 'href') ).offset().top;
    var pageSection = $(this).attr('href');
    var url = pageSection.substr(1).slice(0, -8);
    console.log(scrollPosition + " " + url);
    location.hash = "#" + url + "-section";
    history.replaceState("", "", url);
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
    $('#' + project + '-title').children('img.project-name, a.more').fadeOut(100);
    $('#' + project + '-info').fadeIn(800);
    if (project === "cold-brew") {
      $('#cold-brew').animate({backgroundPositionX: "12%"}, 600);
    }
  });

  $('.close').click(function(){
    var project = $(this).parents('.project-wrapper').attr('id');
    $('#' + project + '-title').removeClass('spin');
    var reappear = function() {
      $('#' + project + '-title').children('img.project-name, a.more').fadeIn(600);
    };
    window.setTimeout(reappear, 1000);
    $('#' + project + '-info').fadeOut(800);
    if (project === "cold-brew") {
      $('#cold-brew').animate({backgroundPositionX: "50%"}, 600);
    }
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
