// Author: Ed Dam

var weddingDate = new Date("May 11, 2022 14:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = now - weddingDate;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("Timer").innerHTML = days + " days " + hours + " hours "  + minutes + " mins " + seconds + " secs ";
}, 1000);
