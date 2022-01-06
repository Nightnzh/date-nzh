
$(document).ready(function () {

  //--幻燈片
  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    // margin:10,
    // autoplay:true, 
    // nav:true,
    dots: true,
    // nav:true,
    // dotsEach:3,
    // autoWidth: true,
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

  // let demo = new CountUp('count-text', 7063);
  // if (!demo.error) {
  //   demo.start();
  // } else {
  //   console.error(demo.error);
  // }

});