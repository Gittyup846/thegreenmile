$(function() {
  var body = document.body;
  var $body = $(body);
  var video = document.getElementById('imvideo');
  var playing = false;

  video.addEventListener('loadeddata', function () {
    body.classList.remove('imvideoloading');

    function playMedia(event) {
      if ($(event.target).hasClass('imblockvidctrl')) {
        return;
      };
      if (playing === false) {
        body.classList.add('implayed');
        playing = true;
      }
      if (video.paused) {
        body.classList.add('implaying');
        video.play();
      } else {
        body.classList.remove('implaying');
        video.pause();
      }
    }

    // When u click a character, play the video
    $body.on('click', '.im-character', function (event) {
      playMedia(event);
    });
  }, false);
  video.load();

  // When you hover scale that character
  $body.on('mouseenter', '.im-character', function (event) {
    $(this).addClass('im-scale');
  });
  $body.on('mouseleave', '.im-character', function (event) {
    $(this).removeClass('im-scale');
  });



});
