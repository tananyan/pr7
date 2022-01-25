$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 170,
    // adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 3000,

    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg" alt="rightt"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
