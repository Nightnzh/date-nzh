


$(document).ready(function () {

  //--幻燈片
  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    dots: true,
    dotsEach: true,
    // dotsData: true,
    // autoWidth:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        dots: true,
        items: 3,
        // dots: true,
      },
    }
  });
  // -- Count.js https://inorganik.github.io/countUp.js/
  const c100 = new CountUp('c100', 0, 100);

  const c300 = new CountUp('c300', 0, 300);

  const c93 = new CountUp('c93', 0, 93);

  const c150 = new CountUp('c150', 0, 150);

  c100.start()
  c300.start()
  c93.start()
  c150.start()



  // -onScroll  

  $(window).on("scroll", () => {

    $('#c100').visible(true) ? c100.start() : c100.reset()
    $('#c300').visible(true) ? c300.start() : c300.reset()
    $('#c93').visible(true) ? c93.start() : c93.reset()
    $('#c150').visible(true) ? c150.start() : c150.reset()

    if ($('.path').visible(true)) {
      $(".info-card.i-1").show()
      $(".info-card.i-2").show()
      $(".info-card.i-3").show()
      $(".info-card.i-4").show()
      $(".info-card.i-5").show()
      if (!$(".info-card.i-1").hasClass("fade-in-bottom-0s"))
        $(".info-card.i-1").toggleClass("fade-in-bottom-0s")
      if (!$(".info-card.i-2").hasClass("fade-in-bottom-03s"))
        $(".info-card.i-2").toggleClass("fade-in-bottom-03s")
      if (!$(".info-card.i-3").hasClass("fade-in-bottom-06s"))
        $(".info-card.i-3").toggleClass("fade-in-bottom-06s")
      if (!$(".info-card.i-4").hasClass("fade-in-bottom-09s"))
        $(".info-card.i-4").toggleClass("fade-in-bottom-09s")
      if (!$(".info-card.i-5").hasClass("fade-in-bottom-12s"))
        $(".info-card.i-5").toggleClass("fade-in-bottom-12s")

    } else {
      $(".info-card.i-1").hide()
      $(".info-card.i-2").hide()
      $(".info-card.i-3").hide()
      $(".info-card.i-4").hide()
      $(".info-card.i-5").hide()

      if ($(".info-card.i-1").hasClass("fade-in-bottom-0s"))
        $(".info-card.i-1").toggleClass("fade-in-bottom-0s")
      if ($(".info-card.i-2").hasClass("fade-in-bottom-03s"))
        $(".info-card.i-2").toggleClass("fade-in-bottom-03s")
      if ($(".info-card.i-3").hasClass("fade-in-bottom-06s"))
        $(".info-card.i-3").toggleClass("fade-in-bottom-06s")
      if ($(".info-card.i-4").hasClass("fade-in-bottom-09s"))
        $(".info-card.i-4").toggleClass("fade-in-bottom-09s")
      if ($(".info-card.i-5").hasClass("fade-in-bottom-12s"))
        $(".info-card.i-5").toggleClass("fade-in-bottom-12s")
    }
  })

  $(".owl-dots").show()


  // ScrollReveal


  // ScrollReveal().reveal('.jum',{delay:100,reset:true});

  const slideUp = {
    distance: '100px',
    origin: 'bottom',
    opacity: 0,
    delay:0,
    reset:true,
    interval: 100
  };

  const slideDown = {
    distance: '100px',
    origin: 'top',
    opacity: 0,
    delay:100,
    reset:false,
    interval: 0
  };
  ScrollReveal().reveal('.app-info-2',slideUp);
  ScrollReveal().reveal('.bgi-item-01',slideUp);
  ScrollReveal().reveal('.bgi-item-02',slideUp);
  ScrollReveal().reveal('.container-lg',slideUp);
  ScrollReveal().reveal('.row',slideUp);
  ScrollReveal().reveal('.jum-bgi-3',slideDown);

  // ScrollReveal().reveal('.jum',slideUp);

});

