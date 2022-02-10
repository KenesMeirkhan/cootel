$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn-active');
  $('ul.menu').toggleClass('menu-active');
});

$('ul.menu li a').click(function(e) {
  e.preventDefault();
  $('ul.menu').toggleClass('menu-active');
  $('.menu-btn').removeClass('menu-btn-active');
});