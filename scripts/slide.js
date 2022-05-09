// Author: Ed Dam

var slidePhotosIndex = 1;
showPhotosDivs(slidePhotosIndex);

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
