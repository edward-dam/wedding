// Author: Ed Dam

function openTab(evt, displayContent) {
  var i, tabPage, tabLink;
  tabPage = document.getElementsByClassName("wed-tabpage");
  for (i = 0; i < tabPage.length; i++) {
    tabPage[i].style.display = "none";
  }
  tabLink = document.getElementsByClassName("wed-tablink");
  for (i = 0; i < tabPage.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" w3-teal", "");
  }
  document.getElementById(displayContent).style.display = "block";
  evt.currentTarget.className += " w3-teal";
}
