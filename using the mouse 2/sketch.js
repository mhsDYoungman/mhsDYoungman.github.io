/* Using The Mouse
Derek Youngman
4/23/2019*/
let rectWidth = 20
let rectHeight = 40
let m = 1.2
function setup() {
createCanvas(1280, 877.49);
}

function draw() {
ellipseMode(CENTER)
ellipse(width/2, height/2, 200, 200)
}

function mouseMoved() {
  // line and rectangle on the mouse pointer
  rectMode(CENTER)
  rect(mouseX, mouseY, rectWidth, rectHeight);
  line( 50, 50, mouseX, mouseY)
}

function mouseClicked() {
  // changing size and colour
  fill(random(255), random(255), random(255));

    if(rectWidth<20*m*35) {
    rectWidth=rectWidth*m
    rectHeight=rectHeight*m/1.06
  }
    if (rectWidth>=20*m*35) {
    rectWidth = 20
    rectHeight = 40
    }

}
