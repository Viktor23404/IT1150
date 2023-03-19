var faceimg = 1;
var buzzerSound = new Audio("Lab3_Images/pop_sound.mp3");

function changeface(){

	if(faceimg == 1) {
		document.getElementById("face").src="Lab3_Images/sad_smile.png";
		document.getElementById("facebtn").innerHTML="Mouth Type 2";
		faceimg = 2;
		buzzerSound.play();
	}
	else if(faceimg == 2) {
		document.getElementById("face").src="Lab3_Images/happy_smile.png";
		document.getElementById("facebtn").innerHTML="Mouth Type 1";
		faceimg = 1;
		buzzerSound.play();
	}
}