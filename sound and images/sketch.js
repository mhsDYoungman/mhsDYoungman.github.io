let mySound; // Creates a variable to hold the sound

 function preload() {
   mySound = loadSound('tasmanianDevilDanielSimon.mp3');  // Loads the sound file into the variable
 }

 function setup() {
   createCanvas(1280, 877.49);
   // Notice that you have to put the variable name in front of the functions
   //mySound.setVolume(0.1);
   //mySound.play();
 }

function mousePressed() {
  if (mySound.isPlaying()) {
    // .isPlaying() returns a boolean
    mySound.stop();
    background(255, 0, 0);
  } else {
    mySound.play();
    background(0, 255, 0);
  }
}

