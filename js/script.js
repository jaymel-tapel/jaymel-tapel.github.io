// Echo Initialization for Lazy Loading
echo.init({
  offset: 1000
});

// // // Variable Declaration
var $window = $(window), $navbar = $('#navbar'), $otherServices = $(".other-services-section"), $bgSand = $("#bg-sand"), $otherServicesScrollPercent = 0, $footerScrollPercent = 0, $starsFront = $('#stars-front'),$starsBack = $('#stars-back'), $preFooter = $(".pre-footer"), $bgSky = $("#footer-sky"), $heroSlider = $('#hero-slider'), slickTimer,  windowPosition, scrollReady = false, heroInterval, heroSpeed = 0,  heroOffset = 0, $activeImage;

// Scroll Effect Function
function elementTransition(effectName, selector, effectDelay) {
  $selector = $(selector);
  if(typeof $selector.offset() == "undefined")
  {
      return true;
  }
  var time = effectDelay;
  var transitionTimeout;
  var elementPosition = $selector.first().offset().top;      

  if (windowPosition < elementPosition) {
      $selector.removeClass('animated').removeClass(effectName).css('opacity', '0');
      return false;
  } else {
    if($selector.last().hasClass('animated')) {
        return false;                
    } else {
      $selector.each(function() {
          var elementItem = $(this);
          setTimeout(function() {
              if(windowPosition > elementPosition) {
                  elementItem.addClass("animated").addClass(effectName).css('opacity', '1');
              } else {
                  return false;                    
              }
          },time);
          time+=effectDelay;                
      });
    }
  }
}

// Featured Photo Section Auto-Width
function fitPhotos() {
  if ($window.width() < 992) {
    $(".item figure").css('height', $('.item.col-4').width());
  } else {
    $(".item figure").css('height', '');    
  }
}

// Orientation Check
function isLandscape() {
  return (window.orientation === 90 || window.orientation === -90);
}

var args = { frequency:100 }
var gn = new GyroNorm();


gn.init( args ).then(function(){
  gn.start(function(data){

    $('.btn-scroll').html(data.do.gamma);

    // if(!isLandscape()) {
    //   if(data.do.gamma < -25) {
    //     heroSpeed = -100;
    //   } else if (data.do.gamma <  -15 ) {
    //     heroSpeed = -50;
    //   } else if (data.do.gamma < -5 ) {
    //     heroSpeed = -25;
    //   } else if (data.do.gamma >  25 ) {
    //     heroSpeed = 100;
    //   }  else if (data.do.gamma >  15 ) {
    //     heroSpeed = 50;
    //   }  else if (data.do.gamma >  5 ) {
    //     heroSpeed = 25;
    //   } else {
    //     heroSpeed = 0;
    //   }
    // } else {
    //   if(data.do.gamma < 180) {
    //     // landscape left
    //     if(data.do.beta < -25) {
    //       heroSpeed = -100;
    //     } else if (data.do.beta <  -15 ) {
    //       heroSpeed = -50;
    //     } else if (data.do.beta < -5 ) {
    //       heroSpeed = -25;
    //     } else if (data.do.beta >  25 ) {
    //       heroSpeed = 100;
    //     }  else if (data.do.beta >  15 ) {
    //       heroSpeed = 50;
    //     }  else if (data.do.beta >  5 ) {
    //       heroSpeed = 25;
    //     } else {
    //       heroSpeed = 0;
    //     }
    //   } else {
    //     // landscape right
    //     if(data.do.beta < -25) {
    //       heroSpeed = 100;
    //     } else if (data.do.beta <  -15 ) {
    //       heroSpeed = 50;
    //     } else if (data.do.beta < -5 ) {
    //       heroSpeed = 25;
    //     } else if (data.do.beta >  25 ) {
    //       heroSpeed = -100;
    //     }  else if (data.do.beta >  15 ) {
    //       heroSpeed = -50;
    //     }  else if (data.do.beta >  5 ) {
    //       heroSpeed = -25;
    //     } else {
    //       heroSpeed = 0;
    //     }
    //   }
    // }
    // if($window.width() >= 768 ) {
    //   heroSpeed /= 2;
    // }

    // heroOffset += heroSpeed;

    // $activeImage.css('transform', 'translate(' + (parseInt($activeImage.css('transform').split(',')[4]) + heroSpeed) + 'px,-50%)');

    // if(( heroOffset + 20 + $window.width()/2 >  $activeImage.width() && heroSpeed > 0  )) {
    //   $.each($(".hero-slide").not('.slick-active'), function (indexInArray, slide) { 
    //     $(slide).find('img').css('transform', 'translate(-' + ($(slide).find('img').width() - $window.width()/2) + 'px, -50%)');
    //   });
    //   $heroSlider.addClass('tilt').slick('slickPrev');
    // } 
    // else if (( heroOffset - $window.width()/2 <= 20) && heroSpeed < 0 ) {
    //   $.each($(".hero-slide").not('.slick-active'), function (indexInArray, slide) { 
    //     $(slide).find('img').css('transform', 'translate(-' + $window.width()/2 + 'px, -50%)');
    //   });
    //   $heroSlider.addClass('tilt').slick('slickNext');
    // }
    
  });
});


// // Tilt Viewing for Mobile
// function heroMove() {
//   heroInterval = setInterval(function() {


   

//   }, 250);
// }

// $heroSlider.on('init', function(event, slick){
//   $activeImage = $(".hero-slide.slick-active").not('.slick-cloned').find('img');
//   $activeImage.css('transition', 'all 0.25s linear');
//   if(!$('html').hasClass('touch')) {
//     slickTimer = setInterval(function() {
//       $heroSlider.slick('slickNext');
//     }, 5000);
//   } else {
//     heroOffset = $activeImage.width()/2;
//     heroMove();
//   }
// });

// $heroSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   clearInterval(heroInterval);
//   $activeImage.css('transition', '');

//   if(!$heroSlider.hasClass('tilt')) {
//     $heroSlider.find('.hero-slide img').css('transform', '');
//     heroOffset = $activeImage.width()/2-$window.width()/2; 
//   }

// });

// $heroSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
//   $activeImage = $(".hero-slide.slick-active").not('.slick-cloned').find('img');
//   $activeImage.css('transition', 'all 0.25s linear');  
  
//   if($heroSlider.hasClass('tilt')) {
//     if(heroSpeed < 0) {
//       heroOffset = $activeImage.width()-$window.width()/2;
//     } else {
//       heroOffset = 0+$window.width()/2;
//     } 
    
//     $heroSlider.removeClass('tilt');
//   }

//   heroMove();
// });

$window.on('load', function () {
  $('#hero-slider').carousel({
    interval: false,
    pause: false,
  });

  windowPosition = $(window).scrollTop()+$(window).height();  
  fitPhotos();
});

$window.on('resize', function() {
  fitPhotos(); 
});

$window.on('scroll', function() {
  
  windowPosition = $(window).scrollTop()+$(window).height();
  
  elementTransition('fadeIn', '.events-section .card', 250);
  elementTransition('zoomIn', '.other-services-section .col-lg-2', 100);           
  elementTransition('fadeIn', '.featured-photos-section .item', 500);          
  elementTransition('fadeIn', '.subscribe-wrapper', 0);
  
  if ( $window .scrollTop() > 100) {
    $navbar.addClass('is-navbar-hidden');
    $('#backToTop').addClass('is-back-visible');
  } else {
    $navbar.removeClass('is-navbar-hidden');
    $('#backToTop').removeClass('is-back-visible');
    $('#dropdown-services').removeClass('is-dropdown-visible');
    $('.navbar').removeClass('is-collapsed');
  }

  if( $window.scrollTop() > $otherServices.offset().top + $otherServices.height()) {
    $bgSky.css('opacity', '1');    
  } else {
    $bgSky.css('opacity', '0');    
  }

  if( ($window.scrollTop() + $window .height() > $preFooter.offset().top)) {
    $footerScrollPercent = ($window.scrollTop() + $window .height() - $preFooter.offset().top) / ($preFooter.height() + $window.height());
    $starsFront.css({
      transform: 'translate3d(-50%,-' + $footerScrollPercent*100/2 + '%, 0) rotate(-' + 15*$footerScrollPercent + 'deg)',
      opacity: $footerScrollPercent
    });
    $starsBack.css({
      transform: 'translate3d(-50%,-' + $footerScrollPercent*100/5 + '%, 0) rotate(-' + 5*$footerScrollPercent + 'deg)',
      opacity: $footerScrollPercent
    });
  }  
});



$('#backToTop').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({scrollTop : 0},500);
});

$('#btn-scroll').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: ($('.events-section').offset().top)
  }, 500);
});

$('#other-services-dropdown').on('click', function(e) {
  e.preventDefault();
  $('#dropdown-services').toggleClass('is-dropdown-visible');
})

$('#navToggle').on('click', function(e) {
  e.preventDefault();
  $('.navbar').toggleClass('is-collapsed');
});

$("#lightbox-close").on('click', function(e) {
  e.preventDefault();
  $('#lightbox-modal').css('display', "none");
});

$('.lightbox').on('click', function(e) {
  e.preventDefault();

  if($(this).find('img').attr('data-echo')) {
    return false;
  } else {
    var clickedIndex = $('[data-lightbox-group=' + $(this).attr('data-lightbox-group')+ ']').index(this);
    var items = $('[data-lightbox-group=' + $(this).attr('data-lightbox-group') + ']') ;

    $("#lightbox-modal").attr('data-group',  $(this).attr('data-lightbox-group'));
  
    $("#lightbox-current-index").text(clickedIndex + 1);
    $("#lightbox-count").text(items.length);
    $("#lightbox-caption").text($(this).find('figcaption').text());
    $("#lightbox-active-image").attr('src', $(this).find('img').attr('src'));
  
    $('#lightbox-modal ul').empty();
    $.each(items, function(i, item) {
      var itemHTML;
      if(i == clickedIndex) {
        itemHTML = '<li><a href="#" class="active"><img src="' + $(item).find('img').attr('src') + '" alt=""></a></li>';      
      } else {
        itemHTML = '<li><a href="#"><img src="' + $(item).find('img').attr('src') + '" alt=""></a></li>';
      }
      $('#lightbox-modal ul').append(itemHTML);
  
    });
  
    $("#lightbox-modal").css('display', 'block');
  }
});

$("#lightbox-next").on("click", function(e) {
  e.preventDefault();

  var currentActiveItem = $(".lightbox-strip a.active");
  var itemParentIndex = currentActiveItem.parent().index(".lightbox-strip li");
  var nextItem;

  currentActiveItem.removeClass('active');  

  if(itemParentIndex == $(".lightbox-strip a").length-1 ) {
    nextItem = $('[data-lightbox-group=' + $('#lightbox-modal').attr('data-group')+ ']').eq(0);
    $("#lightbox-current-index").text(1);    
    $(".lightbox-strip li").eq(0).find('a').addClass('active');    
  } else {
    nextItem = $('[data-lightbox-group=' + $('#lightbox-modal').attr('data-group')+ ']').eq(itemParentIndex+1);
    $(".lightbox-strip li").eq(itemParentIndex + 1).find('a').addClass('active');  
    $("#lightbox-current-index").text(itemParentIndex+2);
    
  }
  $("#lightbox-caption").text(nextItem.find('figcaption').text());
  $("#lightbox-active-image").attr('src', nextItem.find('img').attr('src'));
});

$("#lightbox-prev").on("click", function(e) {
  e.preventDefault();

  var currentActiveItem = $(".lightbox-strip a.active");
  var itemParentIndex = currentActiveItem.parent().index(".lightbox-strip li");
  var nextItem;

  currentActiveItem.removeClass('active');  

  if(itemParentIndex == 0 ) {
    nextItem = $('[data-lightbox-group=' + $('#lightbox-modal').attr('data-group')+ ']').eq( $(".lightbox-strip a").length-1);
    $(".lightbox-strip li").eq( $(".lightbox-strip a").length-1).find('a').addClass('active');  
    $("#lightbox-current-index").text( $(".lightbox-strip a").length);      
  } else {
    nextItem = $('[data-lightbox-group=' + $('#lightbox-modal').attr('data-group')+ ']').eq(itemParentIndex-1);
    $(".lightbox-strip li").eq(itemParentIndex - 1).find('a').addClass('active');  
    $("#lightbox-current-index").text(itemParentIndex);
  }
  $("#lightbox-caption").text(nextItem.find('figcaption').text());
  $("#lightbox-active-image").attr('src', nextItem.find('img').attr('src'));
});

$(document).on("click", ".lightbox-strip a", function(e) {
  e.preventDefault();

  var clickedItemIndex = $(this).parent().index();
  var nextItem;

  $("#lightbox-current-index").text(clickedItemIndex+1);
  $(".lightbox-strip a.active").removeClass('active');  

  nextItem = $('[data-lightbox-group=' + $('#lightbox-modal').attr('data-group')+ ']').eq(clickedItemIndex);
  $(".lightbox-strip li").eq( clickedItemIndex ).find('a').addClass('active');    

  $("#lightbox-caption").text(nextItem.find('figcaption').text());
  $("#lightbox-active-image").attr('src', nextItem.find('img').attr('src'));

});

$("#hero-slider").on('mousemove', function(event) {
  if ($window.width() >= 992) {
    if(!$(this).find('.hero-slide.active').hasClass('.carousel-item-left') && !$(this).find('.hero-slide.active').hasClass('.carousel-item-right')) {
      var percentOffset =  (( $window.width() / 2 ) - event.pageX) /  ($window.width() / 2 );
      var activeSliderImage =  $('.hero-slide.active img');
      var hoverOffset =  ((activeSliderImage.width() - $window.width() ) / 2 ) * (Math.abs(percentOffset));
  
      if(!activeSliderImage.hasClass('entered')) {
        activeSliderImage.addClass('entered');
  
        if(percentOffset < 0) {
          activeSliderImage.css('transition', 'all 100ms ease').css('left', '-=' + (hoverOffset) );    
        } else {
          activeSliderImage.css('transition', 'all 100ms ease').css('left', '+=' + (hoverOffset));        
        }
  
        setTimeout( function() {
          activeSliderImage.addClass('ready');
        }, 100);
  
      } else {
        if(activeSliderImage.hasClass('ready')) {
          activeSliderImage.css('left', '').css('transition', '');
        
          if(percentOffset < 0) {
            activeSliderImage.css('left', '-=' + (hoverOffset) );    
          } else {
            activeSliderImage.css('left', '+=' + (hoverOffset));        
          }
        }
      }
    }
  }
});


$("#hero-slider").on('mouseleave', function(event) {
  if ($window.width() >= 992) {
    $(this).find('img').css('transition', 'all 250ms ease').css('left', '').removeClass('entered').removeClass('ready');
  }
});

$("#hero-slider").on('slide.bs.carousel', function () {
  if ($window.width() >= 992) {
    $(this).find('.hero-slide:not(.active) img').css('left', '').removeClass('entered').removeClass('ready'); 
  }
});

$(".carousel").find('img, a').css('user-drag', 'none');

$(".carousel").on('slid.bs.carousel', function () {
  $('.carousel-item').removeClass('carousel-item-prev').removeClass('carousel-item-next').css('transition', '').css('transform', '');
});


$(".carousel").on('mousedown touchstart', function(e) {
  var touch = undefined;
  if (e.originalEvent.touches) {
      touch = e.originalEvent.touches[0];
  }

  $(this).addClass('clicked').attr('data-x', e.pageX || touch.pageX);
  $(this).find('.carousel-item').css('transition', 'none');  
});

$(".carousel").on("touchend mouseup", function (e) {

    var $this = $(this);
    var deltaUp;
    var touch = undefined;

    if (e.originalEvent.touches || e.originalEvent.changedTouches) {
      touch = e.originalEvent.changedTouches[0];
    }
    deltaUp = (e.pageX || touch.pageX) - $this.attr('data-x');
  
    $this.removeClass('clicked').removeAttr('data-x');
    $('.carousel-item').removeClass('.carousel-item-prev').removeClass('.carousel-item-next').css('transform', '').css('transition', '');    
  
    if (Math.abs(deltaUp) > $(window).width() / 3) {
      if (deltaUp > 0) {
          $this.carousel('prev');
      } else {
          $this.carousel('next');
      }
    }

});

$('.carousel').on('mousemove touchmove', function(e) {
  var $this = $(this);
  var deltaMove;
  if($(this).hasClass('clicked')) {
    var touch = undefined;
    if (e.originalEvent.touches) {
        touch = e.originalEvent.touches[0];
    }
    deltaMove = (e.pageX || touch.pageX) - $this.attr('data-x');

    if (deltaMove > 0) {
      // prev / left
      if($this.find('.carousel-item.active').index() == 0) {
        $this.find('.carousel-item').last().addClass('carousel-item-prev').css('transform', 'translateX(' + (  ($(window).width()  * -1) + deltaMove) + 'px)');
      } else {
        $this.find('.carousel-item.active').prev().addClass('carousel-item-prev').css('transform', 'translateX(' + (  ($(window).width()  * -1) + deltaMove) + 'px)');
      }
    } else {
      // next / right       
      if($this.find('.carousel-item.active').index() == ($this.find(".carousel-item").length-1)) {
        $this.find('.carousel-item').first().addClass('carousel-item-next').css('transform', 'translateX(' + ($(window).width()+deltaMove) + 'px)');
      } else {
        $this.find('.carousel-item.active').next().addClass('carousel-item-next').css('transform', 'translateX(' + ($(window).width()+deltaMove) + 'px)');
      }
    }
    
    $('.carousel-item.active').css('transform', 'translateX(' + deltaMove + 'px');
  }
});