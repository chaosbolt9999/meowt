var i = 0;
var txt = 'Stress. A common feeling of being overwhelmed, worried, or run-downed. Everyone deals with it, whether it be because of school, work, family, relationships, and many others. But now, we focus more on the stress that we students all deal with.';

var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("start").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == txt.length) {
  document.getElementByClass("button").style.background = "white";
	}
}

