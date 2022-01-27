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

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );
});
