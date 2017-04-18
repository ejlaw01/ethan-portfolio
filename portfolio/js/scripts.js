
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

$(document).ready(function(){

  //menu hide and show

  var didScroll;
  var lastScrollTop = 0;
  var delta = 20;
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
    if(Math.abs(lastScrollTop - st) <= delta)
      return;
    if (st > lastScrollTop && st > navbarHeight){
      $('#menu-burger').removeClass('nav-up').addClass('nav-down');
    } else {
      if (st + $(window).height() < $(document).height()) {
        $('#menu-burger').removeClass('nav-down').addClass('nav-up');
      }
    }
    lastScrollTop = st;
  }

  $('img#menu-burger').click(function() {
    $('.menu').removeClass('hide-menu');
    $('.menu').addClass('show-menu');
    $('a.menu-close').fadeIn(50);
  });

  $('.menu a').click(function() {
    $('.menu').removeClass('show-menu');
    $('.menu').addClass('hide-menu');
    $('a.menu-close').fadeOut(50);
  });

  //in-page links

  $(document).on('click', 'a.scroll', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    var scrollPosition = $( $.attr(this, 'href') ).offset().top;
    var pageSection = $(this).attr('href');
    var url = pageSection.substr(1).slice(0, -8);
    history.pushState("", "", url);
    return false;
  });

  //about section details

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

  //dot navigation

  var parPosition = [];
  var viewHeight = $(window).height();

  var findPositions = function() {
    parPosition = [];
    $('.par').each(function() {
      parPosition.push($(this).offset().top);
    });
  }

  findPositions();
  $(window).resize(function() {
    setInterval(function() {
      findPositions();
    }, 250);
  });

  $(document).scroll(function(){
    var position = $(document).scrollTop(),
    index;
    if (position < parPosition[0]) {
      $('.vNav').css('position', 'absolute');
      $('.vNav').css('top', viewHeight*.5);
      $('.vNav').css('bottom', 'auto');
      $('.vNav').css('transform', 'translate(0, -50%)')
    } else if (position >= parPosition[0] && position <= ($('#contact-section').offset().top - viewHeight)) {
      $('.vNav').css('position', 'fixed');
      $('.vNav').css('top', '50%');
      $('.vNav').css('bottom', 'auto');
      $('.vNav').css('transform', 'translate(0, -50%)');
      for (var i = 0; i < parPosition.length; i++) {
       if (position <= parPosition[i] + viewHeight*.6) {
         index = i;
         break;
        }
      }
    } else if (position > ($('#contact-section').offset().top - viewHeight)) {
      $('.vNav').css('position', 'absolute');
      $('.vNav').css('top', 'auto');
      $('.vNav').css('bottom', viewHeight*.5);
      $('.vNav').css('transform', 'translate(0, 50%)')
    }
    $('.vNav ul li a').removeClass('active');
    $('.vNav ul li a:eq('+index+')').addClass('active');
  });

  $('.vNav ul li a').click(function () {
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    $('.vNav ul li a').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  //project info hide and show

  $('.more').click(function(){
    var projectSection = $(this).parents('.project-wrapper').attr('id');
    var project = projectSection.slice(0, -8);
    $('#' + project + '-title').addClass('spin');
    $('#' + project + '-title').children('img.project-name, a.more').fadeOut(100);
    $('#' + project + '-info').fadeIn(800);
    if (project === "cold-brew") {
      $('#cold-brew-section').animate({backgroundPositionX: "12%"}, 600);
    }
  });

  $('.close').click(function(){
    var projectSection = $(this).parents('.project-wrapper').attr('id');
    var project = projectSection.slice(0, -8);
    $('#' + project + '-title').removeClass('spin');
    var reappear = function() {
      $('#' + project + '-title').children('img.project-name, a.more').fadeIn(600);
    };
    window.setTimeout(reappear, 1000);
    $('#' + project + '-info').fadeOut(800);
    if (project === "cold-brew") {
      $('#cold-brew-section').animate({backgroundPositionX: "50%"}, 600);
    }
  });

  //app design slider

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
