let mySound // Creates a variable to hold the sound

 function preload() {
   mySound = loadSound('tasmanianDevilDanielSimon.mp3') // Loads the sound file into the variable
  img = loadImage('kawhi.jpg')
 }

 function setup() {
   createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  tint(255, 51, 51)
  image(img, width/2, height/2)
 }

function mousePressed() {
  if (mySound.isPlaying()) {
    mySound.stop() 
  } else {
    mySound.play()
  }
}

