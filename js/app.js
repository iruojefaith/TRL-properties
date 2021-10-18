// VIDEO CLICK
let videoPlayer = document.getElementById('videoPlayer')
let videoClick = document.getElementById('videoClick')

function stopVideo() {

videoPlayer.style.display = "none";
}

function playVideo(file){
videoClick.src = file;
videoPlayer.style.display = "block";
}


let videoBox = document.getElementById('mainVideo')
let courseDetails = document.getElementById('video-details')
let courseTab = document.querySelector('.tab')
let buttonContainer = courseTab.querySelector('.buttonContainer')



document.addEventListener('click', (e) => {
    let videoUrl = 'smoke.mp4'

    let clicked = e.target
    if (clicked.classList.contains('play-btn')) {
        videoBox.innerHTML = `
        <video width="730"  height="500" autoplay controls style="outline: none;">
        <source src="./img/${videoUrl}" type="video/mp4">
        This browser is old
    </video>
        `
    }

})
