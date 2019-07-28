(() => {
  console.log('Hello sprint');
  // Navbar Transitor
  $(function () {
    var $nav = $(".sticky-top");
    //Display appropriate logo depending on scroll position
    if ($(this).scrollTop() > $nav.height()) {
      $('.navbar .navbar-brand img').attr('src', "./assets/img/logo.png");
      $nav.toggleClass('scrolled', true);
    } else {
      $('.navbar .navbar-brand img').attr('src', "./assets/img/logo-white.png");
      $nav.toggleClass('scrolled', false);
    }
    $(document).scroll(function () {
      // Handle navbar background and image on scroll
      if ($(this).scrollTop() > $nav.height()) {
        $('.navbar .navbar-brand img').attr('src', "./assets/img/logo.png");
      } else {
        $('.navbar .navbar-brand img').attr('src', "./assets/img/logo-white.png");
      }
      $nav.toggleClass('scrolled', $(this).scrollTop() > 1);

    });
  });

  // General Carousel
  var generalCarouselData = {
    nav: true,
    loop: true,
    margin: 10,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
  };

  var serviceCarouselData = Object.assign({
    navContainer: '.service-carousel-layout .owl-nav',
    responsive: {
      0: {
        items: 1
      },
      769: {
        items: 2
      },
      1024: {
        items: 3
      },
    }
  }, generalCarouselData);

  var testimontyCarouselData = Object.assign({
    navContainer: '.testimony-carousel-layout .owl-nav',
    items: 1
  }, generalCarouselData);

  // Service Carousel
  $('#serviceCarousel').owlCarousel(serviceCarouselData);

  // Testimony Carousel
  $('#testimonyCarousel').owlCarousel(testimontyCarouselData);

})();