
const owl = $('.owl-carousel');
owl.owlCarousel({
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

//2 production
const owl2 = $('.owl-carousel');
owl2.owlCarousel({
  loop: true,
  startPosition: 1,
  items: 3,
  margin: 0, 
});
$('.carousel2__btn-right').click(function () {
  owl2.trigger('next.owl.carousel');
});
$('.carousel2__btn-left').click(function () {
  owl2.trigger('prev.owl.carousel');
});

