
echo.init({
  offset: 100,
  throttle: 250,
  unload: false,
  callback: function (element, op) {
    console.log(element, 'has been', op + 'ed')
  }
});


$window = $(window);
$navbar = $('#navbar');

$otherServices = $(".other-services-section");
$bgSand = $("#bg-sand");
$otherServicesScrollPercent = 0;

$footerScrollPercent = 0;
$starsFront = $('#stars-front');
$starsBack = $('#stars-back');
$preFooter = $(".pre-footer");
$bgSky = $("#footer-sky");

var windowPosition;



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

function fitPhotos() {
  if ($window.width() < 992) {
    $(".item figure").css('height', $('.item.col-4').width());
  } else {
    $(".item figure").css('height', '');    
  }
}


$window.on('load', function () {
  $('#hero-slider').slick({
    dots: true,
    autoplay: true
  });

  $('#review-slider').slick({
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    dots: true,
    autoplay: true
  });

  fitPhotos();

});

$window.on('resize', function() {
  fitPhotos(); 
});

$window.on('scroll', function(e) {

  windowPosition = $(window).scrollTop()+$(window).height(); 
  
  elementTransition('bounceInRight', '.events-section .card', 250);           
  elementTransition('zoomIn', '.other-services-section .col-lg-2', 100);           
  elementTransition('fadeIn', '.featured-photos-section .item', 500);          
  elementTransition('fadeIn', '.subscribe-wrapper', 0);               
  
  if ( $window .scrollTop() > 150) {
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
      transform: 'translate(-50%,-' + $footerScrollPercent*100/2 + '%) rotate(-' + 15*$footerScrollPercent + 'deg)',
      opacity: $footerScrollPercent
    });
    $starsBack.css({
      transform: 'translate(-50%,-' + $footerScrollPercent*100/5 + '%) rotate(-' + 5*$footerScrollPercent + 'deg)',
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