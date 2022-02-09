const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.toggle');

/* function */
function playVideo() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/*  EventListener */
video.addEventListener('click', playVideo);
toggle.addEventListener('click', playVideo);
