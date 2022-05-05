// Author: Ed Dam

var countDownDate = new Date("May 11, 2022 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("Timer").innerHTML = days + " days " + hours + " hrs "
  + minutes + " mins " + seconds + " secs ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Timer").innerHTML = "0 days 0 hrs 0 mins 0 secs";
  }
}, 1000);
