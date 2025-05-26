export function handlePlayBtn() {
  const video = document.getElementById("customVideo") as HTMLVideoElement | null;
  const playButton = document.getElementById("playButton") as HTMLElement | null;

  if (!video || !playButton) return;

  playButton.addEventListener("click", (e: MouseEvent) => {
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
