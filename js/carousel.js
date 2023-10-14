
const owl = $('.owl-carousel');
owl.owlCarousel({
  // center: true,
  loop: true,
  startPosition: 1,
  items: 3,
  margin: 60, 
});
$('.carousel__btn-right').click(function () {
  owl.trigger('next.owl.carousel');
});
$('.carousel__btn-left').click(function () {
  owl.trigger('prev.owl.carousel');
});




