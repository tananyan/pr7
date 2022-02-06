$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 170,
    // adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 3000,

    prevArrow:
      '<button type="button" class="slick-prev"><img src="src/icons/left.svg" alt="left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="src/icons/right.svg" alt="rightt"></button>',
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

  function toggleSlide(link) {
    $(link).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault(); //отмена активации ссылки
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__ulist")
          .eq(i)
          .toggleClass("catalog-item__ulist_active");
      });
    });
  }
  ///
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");
  ///

  // modal
  // open
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("fast");
  });
  // close
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #ord, #thanks").fadeOut("fast");
  });
  // $(window).on("click", function (e) {
  //   if (e.target.classList.contains("overlay")) {
  //     $(".overlay, #consultation, #ord, #thanks").fadeOut("fast");
  //   }
  // });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      // esc
      $(".overlay, #consultation, #ord, #thanks").fadeOut("fast");
    }
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#ord .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #ord").fadeIn("fast");
    });
  });

  // valid
  function formValidation(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
          maxlength: 15,
        },
        phone: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите ваше имя",
          minlength: jQuery.validator.format("Минимальная длина {0} букв"),
          maxlength: jQuery.validator.format("Максимальная длина {0} букв"),
        },
        phone: {
          required: "Пожалуйста, введите свой номер",
        },
        email: {
          required: "Пожалуйста, введите e-mail",
          email: "Пример почты name@pochta.ru",
        },
      },
    });
  }

  formValidation("#consultation-form");
  formValidation("#consultation form");
  formValidation("#ord form");

  // maska
  $("input[name=phone]").inputmask("+7 (999) 999 - 99 - 99");

  $("form").submit(function (e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "src/mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #ord").fadeOut();
      $(".overlay, #thanks").fadeIn("fast");

      $("form").trigger("reset");
    });
    return false;
  });

  // scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1500) {
      $(".scroll-up").fadeIn("fast");
      $(".scroll-down").fadeOut("fast");
    } else {
      $(".scroll-up").fadeOut("fast");
      $(".scroll-down").fadeIn("fast");
    }
  });
  // $("a[href^='#']").click(function () {
  //   const _href = $(this).attr("href");
  //   $("html, body").animate({ scrollTop: $(_href).offset().top + "+px" });
  //   return false;
  // });
});
