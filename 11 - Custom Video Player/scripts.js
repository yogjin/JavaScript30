const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toggle = document.querySelector('.toggle');

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

/*  EventListener */
video.addEventListener('click', playVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', playVideo);
