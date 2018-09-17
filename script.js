function shiftFrame(pos) {
  $('.frameView:nth-of-type(' + pos + ')').on('click', function () {
    $('html, body').animate({
      scrollTop: $('.frame:nth-of-type(' + pos + ')').position().top
    }, 150);
  });
}

function shiftActive(pos) {
  if ($(document).scrollTop() >= $('.frame:nth-of-type(' + pos + ')').position().top - 100) {
    $('.frameView').removeClass('active');
    $('.frameView:nth-of-type(' + pos + ')').addClass('active');
  } else {
    shiftActive(pos - 1);
  }
}


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
  
  var frameCt = $('.frame').length;

  for (var i = 1; i <= frameCt; i++) {
    shiftFrame(i);
  }

  $(document).on('scroll', function () {
    shiftActive(frameCt);
  });

});

