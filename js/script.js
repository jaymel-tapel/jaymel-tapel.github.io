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
});

$window.on('scroll', function(e) {
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