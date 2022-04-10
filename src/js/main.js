$(function () {
  const buttons = $(".slider__button");
  const slides = $(".slider__item");

  buttons.on("click", function () {
    const slideId = $(this).data("slide");

    buttons.removeClass("slider__button--active");
    $(this).addClass("slider__button--active");

    slides.removeClass("slider__item--active");
    slides.filter(`[data-slide=${slideId}]`).addClass("slider__item--active");
  });

  const navigation = $(".navigation__list");
  const hamburger = $(".navigation__hamburger");

  hamburger.on("click", function () {
    hamburger.toggleClass("navigation__hamburger--open");
    navigation.toggleClass("navigation__list--open");
  });
});
