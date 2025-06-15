const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const second = document.getElementById("sec");

function clock() {
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  var hrDeg = hr * 30 + min * 0.5;
  var minDeg = min * 6;
  var secDeg = sec * 6;

  hour.style.transform = `rotatez(${hrDeg}deg)`;
  minute.style.transform = `rotatez(${minDeg}deg)`;
  second.style.transform = `rotatez(${secDeg}deg)`;
}
setInterval(clock, 100);
