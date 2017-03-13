/* $(".menu .container div a:nth-child(1)").click(function(){
  console.log("1");
});

$(".menu .container div a:nth-child(1)").click(function(){
  $(".menu").fadeOut(300);
});

$(".menu .container div a:nth-child(2)").click(function(){
  $(".menu").slideUp(300);
});

$(".menu .container div a:nth-child(3)").click(function(){
  $(".menu").slideDown(300);
});
*/

//комментарий

/* длинные комментарии
с переносом */

$(".section_one .heading p:nth-child(1)").click(function(){
  $(".fixed_back,.modal_window_form").fadeIn(500);
});

  $(".fixed_back,.modal_window_form textarea").click(function(){
    $(".fixed_back,.modal_window_form").fadeOut(500);
});

$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplaySpeed: 3000,
  autoplay: true,
  dots: true
});
