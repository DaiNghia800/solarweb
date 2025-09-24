$(document).ready(function () {
    $('.list-banner-ads').slick({
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, 
    speed: 3000, 
    cssEase: 'linear',
    infinite: true, 
    arrows: false,
    responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          }
        ]
    });
});
