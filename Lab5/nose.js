var noseimg = 1;
var buzzerSound = new Audio("Lab3_Images/pop_sound.mp3");

function changenose(){

	if(noseimg == 1) {
		document.getElementById("nose").src="Lab3_Images/nose_2.png";
		document.getElementById("nosebtn").innerHTML="Nose Type 1";
		noseimg = 2;
		buzzerSound.play();
	}
	else if(noseimg == 2) {
		document.getElementById("nose").src="Lab3_Images/nose_1.png";
		document.getElementById("nosebtn").innerHTML="Nose Type 2";
		noseimg = 1;
		buzzerSound.play();
	}
}