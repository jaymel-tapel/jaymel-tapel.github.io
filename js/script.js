
var $window = $(window), $navbar = $('#navbar'), $otherServices = $(".other-services-section"), $bgSand = $("#bg-sand"), $otherServicesScrollPercent = 0, $footerScrollPercent = 0, $starsFront = $('#stars-front'),$starsBack = $('#stars-back'), $preFooter = $(".pre-footer"), $bgSky = $("#footer-sky"), $heroSlider = $('#hero-slider'), slickTimer,  windowPosition, scrollReady = false, heroInterval, heroSpeed = 0,  heroOffset = 0, $activeImage;

heroSpeed = 100;

// Tilt Viewing for Mobile
function heroMove() {
  heroInterval = setInterval(function() {

    heroOffset += heroSpeed;

    $activeImage.css('transform', 'translate(' + (parseInt($activeImage.css('transform').split(',')[4]) + heroSpeed) + 'px,-50%)');

    if(( heroOffset + 20 + $window.width()/2 >  $activeImage.width() && heroSpeed > 0  )) {
      $.each($(".hero-slide").not('.slick-active'), function (indexInArray, slide) { 
        $(slide).find('img').css('transform', 'translate(-' + ($(slide).find('img').width() - $window.width()/2) + 'px, -50%)');
      });
      $heroSlider.addClass('tilt').slick('slickPrev');
    } 
    else if (( heroOffset - $window.width()/2 <= 20) && heroSpeed < 0 ) {
      $.each($(".hero-slide").not('.slick-active'), function (indexInArray, slide) { 
        $(slide).find('img').css('transform', 'translate(-' + $window.width()/2 + 'px, -50%)');
      });
      $heroSlider.addClass('tilt').slick('slickNext');
    }

  }, 250);
}

$heroSlider.on('init', function(event, slick){
  $activeImage = $(".hero-slide.slick-active").not('.slick-cloned').find('img');
  $activeImage.css('transition', 'all 0.25s linear');
  if(!$('html').hasClass('touch')) {
    slickTimer = setInterval(function() {
      $heroSlider.slick('slickNext');
    }, 5000);
  } else {
    heroOffset = $activeImage.width()/2;
    heroMove();
  }
});

$heroSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  clearInterval(heroInterval);
  $activeImage.css('transition', '');

  if(!$heroSlider.hasClass('tilt')) {
    $heroSlider.find('.hero-slide img').css('transform', '');
    heroOffset = $activeImage.width()/2-$window.width()/2; 
  }

});

$heroSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
  $activeImage = $(".hero-slide.slick-active").not('.slick-cloned').find('img');
  $activeImage.css('transition', 'all 0.25s linear');  
  
  if($heroSlider.hasClass('tilt')) {
    if(heroSpeed < 0) {
      heroOffset = $activeImage.width()-$window.width()/2;
    } else {
      heroOffset = 0+$window.width()/2;
    } 
    
    $heroSlider.removeClass('tilt');
  }

  heroMove();
});

$window.on('load', function () {
  $('#hero-slider').slick({
    dots: true,
    autoplay: false,
    speed: 300
  });  
  $('#review-slider').slick({
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    dots: true,
    autoplay: true
  });
});
