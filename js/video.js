const video = document.querySelector("#player1");

window.addEventListener("load", function () {
  console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function () {
  video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.slowDown *= 0.95;
});
