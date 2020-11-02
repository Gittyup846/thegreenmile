$(function() {
  var body = document.body;
  var $body = $(body);
  var video = document.getElementById('imvideo');

  $body.on('click', '.im-character', function (event) {
    // When u click a character, play the video
    video.play();
    $body.addClass('implaying');

    var timer = setTimeout(function () {
      // Make sure you indicate video has ended
      // so it can play again for all characters
      console.log('video finished');
      $body.removeClass('implaying');
    }, video.duration * 1000);

    // When u click character paul, mr mrjingels, melinda the class gets added = dead
    // When u click character percy the class gets removed = well
    $(this).toggleClass('im-character--dead');
  });

  // When you hover scale that character
  $body.on('mouseenter', '.im-character', function (event) {
    $(this).addClass('im-scale');
  });
  $body.on('mouseleave', '.im-character', function (event) {
    $(this).removeClass('im-scale');
  });
});
