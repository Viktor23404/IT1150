var eyesimg = 1;
var buzzerSound = new Audio("Lab3_Images/pop_sound.mp3");

function changeeyes(){

	if(eyesimg == 1) {
		document.getElementById("eyes").src="Lab3_Images/sad_eyebrows.png";
		document.getElementById("eyesbtn").innerHTML="Eyes Type 2";
		eyesimg = 2;
		buzzerSound.play();
	}
	else if(eyesimg == 2) {
		document.getElementById("eyes").src="Lab3_Images/angry_eyebrows.png";
		document.getElementById("eyesbtn").innerHTML="Eyes Type 1";
		eyesimg = 1;
		buzzerSound.play();
	}
}