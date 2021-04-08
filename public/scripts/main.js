

(() => {
    //storing a handle for the subtitles container and controls 
    const videoContainer = document.getElementById('videoContainer');
    const subtitles = document.getElementById('subtitles');
    const videoControls = document.getElementById('video-controls');

const playpause = document.getElementById('playpause');
const stop = document.getElementById('stop');
const mute = document.getElementById('mute');


//setting up the event listeners for each button
playpause.addEventListener('click', function(e) {
    if (video.paused || video.ended) video.play();
    else video.pause();
 });
 stop.addEventListener('click', function(e) {
    video.pause();
    video.currentTime = 0;
    progress.value = 0;
 });
 mute.addEventListener('click', function(e) {
    video.muted = !video.muted;
 });
 subtitles.addEventListener('click', function(e) {
    if (subtitlesMenu) {
       subtitlesMenu.style.display = (subtitlesMenu.style.display == 'block' ? 'none' : 'block');
    }
 });
})();