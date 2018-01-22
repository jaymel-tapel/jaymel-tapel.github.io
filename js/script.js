$window = $(window);
$navbar = $('#navbar');
$starsFront = $('#stars-front');
$starsBack = $('#stars-back');
$preFooter = $(".pre-footer");
$scrollPercent = 0;

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

$window.on('scroll', function () {
  if ( $window .scrollTop() > 150) {
    $navbar.addClass('is-navbar-hidden');
    $('#backToTop').addClass('is-back-visible');
  } else {
    $navbar.removeClass('is-navbar-hidden');
    $('#backToTop').removeClass('is-back-visible');
    $('#dropdown-services').removeClass('is-dropdown-visible');
    $('.navbar').removeClass('is-collapsed');
    
    
  }

  if( $window .scrollTop() + $window .height() > $preFooter.offset().top ) {
    $("#footer-sky").css('display', 'block');    
    $scrollPercent = ($window.scrollTop() + $window .height() - $preFooter.offset().top) / ($preFooter.height() + $window.height());
    $starsFront.css({
      transform: 'translate(-50%,-' + $scrollPercent*100/2 + '%) rotate(-' + 15*$scrollPercent + 'deg)',
      opacity: $scrollPercent
    });
    $starsBack.css({
      transform: 'translate(-50%,-' + $scrollPercent*100/5 + '%) rotate(-' + 5*$scrollPercent + 'deg)',
      opacity: $scrollPercent
    });
  } else {
    $("#footer-sky").css('display', 'none');
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