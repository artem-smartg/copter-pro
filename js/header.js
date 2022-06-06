$(function() {

  var header = $("#header"),
    // introH = $("#intro").innerHeight(),
    introH = 200,
    scrollOffset = $(window).scrollTop();





  /*Fixed Header*/
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset){

    if( scrollOffset >= introH ){
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }



  /*Menu nav Toggle*/
  $("#nav_toggle").on("click",function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

});




// droping header up

let lastScroll = 0;
const defaultOffset = 200;
const headers = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => headers.classList.contains('hide');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //scroll down
    headers.classList.add('hide');
  }
  else if(scrollPosition() < lastScroll && containHide()){
    //scroll up
    headers.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});







// $(document).ready(function() {
//   var body = $(".container");
//   var header = $("header");
//   var nav = header.find("nav");
//   var max = 400;

//   var headerHeight = header.outerHeight();
//   var navHeight = nav.outerHeight();

//   header.addClass('shown');
//   body.css("margin-top", headerHeight + 30);

//   var lastActive = 0;
  
//   $(window).on("scroll", function() {
//     var top = $(document).scrollTop();
//     if (top >= max) {
      
//       if(lastActive > top) {
//         header.removeClass('hidden');
//         header.addClass("shown");
//         header.stop().animate({ marginTop: 0 }, 200);
//       } else {
//         header.removeClass('hidden');
//         header.addClass("shown");
//         header.stop().animate({ marginTop: -(headerHeight - navHeight) }, 200);
//       }
      
//       lastActive = top;
//     } else {
//       if (header.hasClass('shown')) {
//         header.removeClass('shown');
//         header.addClass("hidden");
//         header.stop().animate({ marginTop: 0 }, 200);
//       }
//     }
//   });
// });