const video = document.querySelector("#player1");

window.addEventListener("load", function () {
  video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function () {
  video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate -= 0.05;
  console.log("Current playbackRate:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate += 0.05;
  console.log("Current playbackRate:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 15 <= video.duration) {
    video.currentTime += 15;
  } else {
    video.currentTime = 0;
    // video.pause();
  }
  console.log("Current Timestamp:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  let muteText = document.querySelector("#mute");
  switch (muteText.textContent) {
    case "Mute":
      muteText.textContent = "Unmute";
      video.muted = true;
      break;
    case "Unmute":
      muteText.textContent = "Mute";
      video.muted = false;
      break;
    default:
      break;
  }
});

document.querySelector("#slider").addEventListener("change", function () {
  video.volume = this.value / 100;
  document.querySelector("#volume").textContent = video.volume * 100;
});

document.querySelector("#vintage").addEventListener("click", function () {
  video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function () {
  video.className = "";
});
