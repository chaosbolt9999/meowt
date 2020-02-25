var i = 0;
var txt = 'Stress. A common feeling of being overwhelmed, worried, or run-downed. Everyone deals with it, whether it be because of school, work, family, relationships, and many others. But now, we focus more on the stress that we students all deal with.';
var x = document.getElementsByClassName("button");
var j;
var speed = 30;

function hasClicked() {
  if(localStorage.getItem("visited")) {
    document.getElementById("start").innerHTML += txt;
    document.getElementById("startbutton").style.display = "none";
    for(j = 0; j < x.length; j++) {
      x[j].style.display = "block";
      x[j].style.opacity = 1;
    }
  }
}

function typeWriter() {
  localStorage.setItem("visited", "true");
  document.getElementById("startbutton").style.animation = "spaghettiDown 0.3s ease-in-out";
  setTimeout(typeWriter, 300);
  document.getElementById("startbutton").style.opacity = 0;
  document.getElementById("startbutton").style.display = "none";
  if (i < txt.length) {
    document.getElementById("start").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
if (i == txt.length) {
for (j = 0; j < x.length; j++) {
  x[j].style.display = "block";
  x[j].style.animation = "spaghettiUp 0.3s ease-in-out";
  x[j].style.opacity = 1;
}
}
}

