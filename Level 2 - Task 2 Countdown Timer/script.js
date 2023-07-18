"USE STRICT";

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const start = document.getElementById("start");
const reset = document.getElementById("reset");

const disp = document.getElementById("disp");

var interval = null;
var total = 0;

totalValue = () => {
  total = Number(hr.value) * 3600 + Number(min.value) * 60 + Number(sec.value);
};

Timer = () => {
  totalValue();
  total--;

  if (total >= 0) {
    var hour = Math.floor(total / 3600);
    var minute = Math.floor(total / 60 - hour * 60);
    var second = total - (hour * 3600 + minute * 60);

    hr.value = hour;
    min.value = minute;
    sec.value = second;
  } else {
    disp.innerText = "Time Over!!";
  }
};

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(Timer, 1000);

  disp.innerText = "Timer Started";
});

reset.addEventListener("click", () => {
  clearInterval(interval);

  hr.value = "";
  min.value = "";
  sec.value = "";

  disp.innerText = "Timer";
});
