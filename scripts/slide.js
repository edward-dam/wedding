// Author: Ed Dam

// Slides

var slideHomeIndex = 1;
var slidePhotosIndex = 1;
showHomeDivs(slideHomeIndex);
showPhotosDivs(slidePhotosIndex);

// Home

function slideHomePlus(n) {
  showHomeDivs(slideHomeIndex += n);
}

function showHomeDivs(n) {
  var i;
  var x = document.getElementsByClassName("wed-slide-home");
  if (n > x.length) {slideHomeIndex = 1}
  if (n < 1) {slideHomeIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideHomeIndex-1].style.display = "block";
}

// Photos

function slidePhotosPlus(n) {
  showPhotosDivs(slidePhotosIndex += n);
}

function showPhotosDivs(n) {
  var i;
  var x = document.getElementsByClassName("wed-slide-photos");
  if (n > x.length) {slidePhotosIndex = 1}
  if (n < 1) {slidePhotosIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slidePhotosIndex-1].style.display = "block";
}
