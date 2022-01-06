
$(document).ready(function () {

  //--幻燈片
  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    dots: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3,
        // dots: true,
      },
    }
  });
});