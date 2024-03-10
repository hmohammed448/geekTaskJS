let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let currentTimeDisplay = document.querySelector("#currentTime");
let stopTimeInput = document.querySelector("#stopTime");

let startTime;
let stopTime;
let intervalId;

function startStopwatch() {
  startTime = new Date();
  intervalId = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  stopTimeInput.disabled = true;
}

function stopStopwatch() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  stopTimeInput.disabled = false;
}

function updateTime() {
  let currentTime = new Date();
  currentTimeDisplay.textContent = formatTime(currentTime);

  if (stopTime && currentTime >= stopTime) {
    stopStopwatch();
  }
}

function formatTime(time) {
  let hours = time.getHours().toString().padStart(2, "0");
  let minutes = time.getMinutes().toString().padStart(2, "0");
  let seconds = time.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

startBtn.addEventListener("click", startStopwatch);

stopBtn.addEventListener("click", stopStopwatch);

stopTimeInput.addEventListener("input", function () {
  let inputTime = stopTimeInput.value;
  let [hours, minutes, seconds] = inputTime.split(":");
  stopTime = new Date();
  stopTime.setHours(parseInt(hours));
  stopTime.setMinutes(parseInt(minutes));
  stopTime.setSeconds(parseInt(seconds));
});
