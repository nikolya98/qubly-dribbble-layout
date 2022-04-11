$(function () {
  new WOW().init();
});

$(".slider__button").on("click", function () {
  const slideId = $(this).data("slide");

  $(".slider__button").removeClass("slider__button--active");
  $(this).addClass("slider__button--active");

  $(".slider__item").removeClass("slider__item--active");
  $(".slider__item")
    .filter(`[data-slide=${slideId}]`)
    .addClass("slider__item--active");
});

$(".navigation__hamburger").on("click", function () {
  $(".navigation__hamburger").toggleClass("navigation__hamburger--open");
  $(".navigation__list").toggleClass("navigation__list--open");
});

$("a.scroll").on("click", function (event) {
  var $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 20,
      },
      {
        duration: 2000,
        specialEasing: {
          width: "linear",
          height: "easeInOutCubic",
        },
      }
    );
  event.preventDefault();
});
