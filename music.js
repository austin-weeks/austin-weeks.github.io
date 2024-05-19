const playingIcon = '<i class="ph-bold ph-speaker-high"></i>';
const mutedIcon = '<i class="ph-bold ph-speaker-simple-x"></i>';

const muteBtn = document.createElement("div");
muteBtn.classList.add("mute-button", "shadow-border");
muteBtn.innerHTML = playingIcon;

const music = new Audio("/background-music.mp3");
document.querySelector("main").append(music, muteBtn);
music.volume = 0.3;
music.loop = true;

let isInitialized = false;
let isMuted = false;

function toggleMute() {
    isMuted = !isMuted;

    if (!isMuted) {
        music.play();
        muteBtn.innerHTML = playingIcon;
    }
    else {
        music.pause();
        muteBtn.innerHTML = mutedIcon;
    }
}
muteBtn.addEventListener("click", toggleMute);

document.onvisibilitychange = function() {
    if (document.visibilityState === "hidden") music.pause();
    else if (!isMuted) music.play();
}

const initializeMusic = () => {
    if (isInitialized) return;
    console.log("trying to play music!");

    setTimeout(() => {
        if (!isMuted) {
            music.play();        
            if (!music.paused) isInitialized = true;
        }
    }, 1);
}
document.body.addEventListener("mouseover", initializeMusic);
document.body.addEventListener("keydown", initializeMusic);
document.body.addEventListener("scroll", initializeMusic);
document.body.addEventListener("click", initializeMusic);