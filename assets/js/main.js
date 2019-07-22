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
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true
  })
  // Home Slider
  $(function () {
    $('#home-carousel').owlCarousel({
      items: 1,
      responsive: {
        0: {
          items: 3
        },
      }
    });
  });

})();