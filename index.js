


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
  // --
  const c100 = new CountUp('c100', 0, 100);
  // if (!c100.error) {
  //   c100.start();
  // } else {
  //   console.error(demo.error);
  // }
  const c300 = new CountUp('c300', 0, 300);
  // if (!c300.error) {
  //   c300.start();
  // } else {
  //   console.error(demo.error);
  // }
  const c93 = new CountUp('c93', 0, 93);
  // if (!c93.error) {
  //   c93.start();
  // } else {
  //   console.error(demo.error);
  // }
  const c150 = new CountUp('c150', 0, 150);
  // if (!c150.error) {
  //   c150.start();
  // } else {
  //   console.error(demo.error);
  // }

  // -onScroll  


  // ---判斷element 是否可視
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


  $(window).on("scroll",()=>{
    
    // console.log(isInViewport(document.querySelector('#c100')));
    isInViewport(document.querySelector('#c100')) ? c100.start() : c100.reset()
    isInViewport(document.querySelector('#c300')) ? c300.start() : c300.reset()
    isInViewport(document.querySelector('#c93')) ? c93.start() : c93.reset()
    isInViewport(document.querySelector('#c150')) ? c150.start() : c150.reset()
    
  })  


  
  // console.log($(window))

});

