var hasClicked = function() {
	if(localStorage.getItem("beesited")) {
			document.getElementById("boop").className += "beetlejuice";
			document.getElementById("beep").className += "bestfriend";
			document.getElementById("name").innerHTML = "";
			document.getElementById("email").innerHTML = "";
			document.getElementById("exp").innerHTML = "";
			document.getElementById("bye").className += "beetlejuice";
	}
}

document.addEventListener('DOMContentLoaded', hasClicked, false);

var contactUs = function() {
			localStorage.setItem("beesited", "true");
			document.getElementById("boop").className += "beetlejuice";
			document.getElementById("beep").className += "bestfriend";
			document.getElementById("name").innerHTML = "";
			document.getElementById("email").innerHTML = "";
			document.getElementById("exp").innerHTML = "";
			document.getElementById("bye").className += "beetlejuice";
}
