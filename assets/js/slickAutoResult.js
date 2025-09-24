 $(document).ready(function(){
    $('.list-wrap-rate').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      responsive: [
      {
        breakpoint: 575, // màn hình <= 575px
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
    });
 });

 $(document).ready(function(){
  $('.list-box-eval').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear'
  });
});