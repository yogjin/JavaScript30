const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.toggle');
const volume = document.querySelectorAll('.player__slider')[0];
const playbackRate = document.querySelectorAll('.player__slider')[1];

/* function */
function playVideo() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// toggle icon 변경
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.innerHTML = icon;
}

function updateVolume(e) {
  video.volume = this.value;
}

/*  EventListener */
video.addEventListener('click', playVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', playVideo);
volume.addEventListener('change', updateVolume);
