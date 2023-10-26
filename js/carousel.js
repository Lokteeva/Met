const owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  startPosition: 1,
  responsive: {
    0: {
      items: 1,
    },
    390: {
      items: 3,
    },
    1000: {
      items: 3,
      margin: 60,
    },
  },
  responsiveBaseElement: 'body',
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
  items: 1,
  margin: 0,
  responsive: {
    0: {
      items: 1,
    },
    390: {
      items: 3,
    },
    1000: {
      items: 3,
      margin: 0,
    },
  },
  responsiveBaseElement: 'body',
});
$('.carousel2__btn-right').click(function () {
  owl2.trigger('next.owl.carousel');
});
$('.carousel2__btn-left').click(function () {
  owl2.trigger('prev.owl.carousel');
});


// выбор карусели Твердомер или Меры твердости
const productsMera = document.querySelector('#productsMera');
const productsHardnessTester = document.querySelector('#productsHardnessTester');
const productsCarousel1 = document.querySelector('#productsCarousel1');
const productsCarousel2 = document.querySelector('#productsCarousel2');

productsMera.addEventListener('click', function(){
  productsCarousel1.classList.add('none');
  productsCarousel2.classList.remove('none');
  productsHardnessTester.classList.remove('active');
  productsMera.classList.add('active');

})

productsHardnessTester.addEventListener('click', function(){
  productsCarousel2.classList.add('none');
  productsCarousel1.classList.remove('none');
  productsHardnessTester.classList.add('active');
  productsMera.classList.remove('active');
})