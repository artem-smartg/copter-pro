$(document).ready(function(){
  $('.slidermini').slick({
    infinite: true,
    slidesToShow: 3,
    asNavFor: ".sliderbig",
    adaptiveHeight: true
  });

  $('.sliderbig').slick({
    arrows: false,
    fade:true,
    asNavFor: ".slidermini",
  })
});

