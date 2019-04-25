let mySound // Creates a variable to hold the sound

 function preload() {
   mySound = loadSound('tasmanianDevilDanielSimon.mp3') // Loads the sound file into the variable
  img = loadImage('kawhi.jpg')
 }

 function setup() {
   createCanvas(1280, 877.49)
  image(img, 0, 0)
 }

function mousePressed() {
  if (mySound.isPlaying()) {
    mySound.stop()
    background(255, 0, 0)
  } else {
    mySound.play()
    background(0, 255, 0)
  }
}

