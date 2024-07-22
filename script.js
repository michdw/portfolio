$(document).ready(function () {
  $('.dimmer').hide();
  
  $('html, body').animate({
    scrollTop: 0
  });
  
  $('.tile').hover(function () {
    $(this).find('span').removeClass('aside');
    $(this).find('.dimmer').fadeIn(200);
  }, function () {
    $(this).find('span').addClass('aside');
    $(this).find('.dimmer').fadeOut(200);
  });

});

