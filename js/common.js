// hamburger amination
jQuery(document).ready(function ($) {
  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  });
});

//Fixed-background
jQuery(function ($) {
  var clicks = 0;
  $('.navbar-toggler').click(function () {
    if (clicks == 0) {
      $('html, body').addClass('fixedPosition');
      clicks++;
    } else {
      $('html, body').removeClass('fixedPosition');
      clicks--;
    }
    console.log(clicks);
  });
});

$(document).ready(function(){
  $(".nav-item").hover(function(){
    // $("#headerWrap").addClass('bgChange');
    // $('html, body').addClass('fixedPosition');
    }, function(){
    // $("#headerWrap").removeClass('bgChange');
    // $('html, body').removeClass('fixedPosition');
  });
});

// Fixed Navigation
jQuery(function ($) {
  $(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 0) {
      $('#headerWrap').addClass('affix');
    } else {
      $('#headerWrap').removeClass('affix');
    }
  });
});

// hide menu on scroll 
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 600) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("headerWrap").style.top = "0";
        } else {
          if (screen.width >= 1024) {
            document.getElementById("headerWrap").style.top = "-100px";
          } else{
            document.getElementById("headerWrap").style.top = "-70px";
          }
        }
        prevScrollpos = currentScrollPos;
      }
      }


if (screen.width <= 1024) {
  const header = document.querySelector('#headerWrap');
  const belowHeader = header.parentElement.nextElementSibling;
  
  belowHeader.style.marginTop = header.clientHeight + 'px';
}



$(document).ready(function(){
  
  $(function(){
    
    $('.middleContent .slides:gt(0)').hide();
    setInterval(function(){
      $('.middleContent :first-child').fadeOut(2000).next('.slides').fadeIn(2000)
      .end().appendTo('.middleContent');
  }, 7000);
    
  });
  
});


(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 45)
        }, 1000);
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#servNav',
    offset: 54
  });

})(jQuery); // End of use strict
