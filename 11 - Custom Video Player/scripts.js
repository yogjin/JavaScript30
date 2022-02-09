const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const volume = document.querySelectorAll('.player__slider')[0];
const playbackRate = document.querySelectorAll('.player__slider')[1];
const skipButtons = document.querySelectorAll('[data-skip]');

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

function updatePlaybackRate() {
  video.playbackRate = this.value;
}

function handleSkip() {
  const value = this.dataset.skip;
  video.currentTime += parseFloat(value);
}

function handleProgressBar(e) {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

/*  EventListener */
video.addEventListener('click', playVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgressBar);
toggle.addEventListener('click', playVideo);
volume.addEventListener('mousemove', updateVolume);
playbackRate.addEventListener('mousemove', updatePlaybackRate);
skipButtons.forEach((skipButton) => {
  skipButton.addEventListener('click', handleSkip);
});
