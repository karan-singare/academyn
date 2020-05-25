import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


/**
 * HEADER
 * top header search button
 */
$('label[for="search"]').click(function() {
  $('#search').toggleClass('u-visible');
  console.log('hello');
});

/**
 * VERTICAL MULTILEVEL MENU
 */
$(document).ready(function() {
  var submenus = $('.navigation__level--main > li  ul');

  for (var i = 0; i < submenus.length; i++) {
    $(submenus[i]).parent().hover(function() {
      $(this).toggleClass('link-highlight');
      $(this).find('ul:first').css({
        'display': 'block',
      }).addClass('animate__animated animate__fadeIn animate__faster');
    }, function() {
      $(this).find('ul:first').css({
        'display': 'none',
      });
      $(this).toggleClass('link-highlight');
    });

    // $(submenus[i]).parent().click(function() {
    //   $(this).find('ul:first').toggleClass('display-block').addClass('animate__animated animate__fadeIn animate__faster');
    // });
  }

  $('.vertical_menu_toggle').click(function() {
    $('.navigation').css({
      'visibility' : 'visible',
    });
    $('.navigation__level--main').addClass('animate__animated animate__fadeIn');
  });

  $('.navigation__close').click(function() {
    $('.navigation__level--main').addClass('animate__animated animate__faedeOut');

    $('.navigation').css({
      'visibility' : 'hidden',
    });
  });
});


/**
 * DRILLDOWN MENU
 *
 * The class 'is-drilldown' is providing some inline styling (max-height and min-height)
 * We need to remove these stylings in this case
 * These styles are removed here.
 */
$('.is-drilldown').attr('style', 'height: 100%;');

/**
 * MULTILEVEL MENU
 *
 * The class 'is-drilldown' is providing some inline styling (max-height and min-height)
 * We need to remove these stylings in this case
 * These styles are removed here.
 */
$('#multi_menu_toggler').click(function() {
  $('#multi_menu_navigation').css({
    'display': 'block',
  });
});

/**
 * SLIDER NUMBER 2
 */

var slides = $('.slide');
var bullets = $('.slider__bullets ul li');
var bullets_array = Array.from(bullets);
var i = 4;

bullets_array.forEach((item, j) => {
  $(item).click(function() {
    $(slides).hide();
    $(bullets).removeClass('active');
    $(item).addClass('active');
    $(slides[j]).css({
      'display': 'flex',
    });
    i = j;
    console.log(i);
  })

});

setInterval(function() {
  if (i > slides.length-1) {
    i = 0;
  }
  $(slides[i]).hide();
  $(bullets[i]).removeClass('active');


  if (i < slides.length-1) {
    $(slides[i+1]).css({
      'display': 'flex',
    });

    $(bullets[i+1]).addClass('active');
  } else {
    $(slides[0]).css({
      'display': 'flex',
    });
    $(bullets[0]).addClass('active');

  }
  i++;

}, 4000);

/**
 * SMOOTH SCROLL TO TOP
 */
$(document).ready(function() {
  var offset = 250;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.scroll_top').fadeIn();
    } else {
      $('.scroll_top').fadeOut();
    }
  });
  $('.scroll_top a').on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    var target = $(this.hash);
    $('html, body').animate({
      'scrollTop': target.offset().top,
    }, 800, 'swing');
  });
});

/**
 * SCROLLING ANIMATIONS FOR HEADER
 */
$(document).ready(function() {
  var lastScrollTop = 0;
  var offset = 250;
  $(window).scroll(function(event) {
    var currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > lastScrollTop) {
      $('header .sub-header').slideUp();
      // $('header h1').animate({
      //   'font-size': '2.5rem',
      // });
    } else {
      $('header .sub-header').slideDown();
      // $('header h1').animate({
      //   'font-size': '4rem',
      // });
    }
    lastScrollTop = currentScrollTop;

  });

});

/**
 * FOOTER ANIMATION
 */
function isOnScreen(elem) {
  var viewport_top = $(window).scrollTop();
  var viewport_height = $(window).height();
  var viewport_bottom = viewport_top + viewport_height;
  var top = $(elem).offset().top;
  var height = $(elem).height();
  var bottom = top + height;

  return(top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);

}

// $(document).ready(function() {
//   $('footer .overlay-3').addClass('animate__animated');
//   $(window).on('scroll', function(event) {
//     if (isOnScreen('footer')) {
//       $('footer .overlay-3').addClass('animate__slideOutDown');
//     } else {
//       $('footer .overlay-3').removeClass('animate__slideOutDown').addClass('animate__slideInUp');
//     }
//   });
// });

/**
 * Animation for the websites
 */
$('main .callout').attr('data-aos', 'zoom-in');
$('.sidebar_left .card').attr('data-aos', 'slide-right');
$('.sidebar_right .card').attr('data-aos', 'slide-left');
$('.footer__navigation .cell').attr('data-aos', 'slide-up');
$('.top_content .card').attr({
  'data-aos-offset': 0,
  'data-aos': 'slide-up',
});
