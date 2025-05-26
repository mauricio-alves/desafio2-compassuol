export function handlePlayBtn() {
    const video = document.getElementById("customVideo");
    const playButton = document.getElementById("playButton");
    if (!video || !playButton)
        return;
    playButton.addEventListener("click", (e) => {
        e.preventDefault();
        video.play();
        playButton.style.display = "none";
    });
    video.addEventListener("ended", () => {
        playButton.style.display = "block";
    });
    video.addEventListener("click", () => {
        if (!video.paused) {
            video.pause();
            playButton.style.display = "block";
        }
    });
}
