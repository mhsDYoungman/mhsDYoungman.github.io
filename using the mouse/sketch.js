/*
House Assignment
Created by Derek Youngman
April 16, 2019
*/
let width = 20
let height = 40
let m = 1.2
function setup() {
createCanvas(1280, 877.49);
}

function draw() {

}

function mouseMoved() {
  background(0)
  rectMode(CENTER)
  rect(mouseX, mouseY, width, height);
}

function mouseClicked() {
  // changing the colour
  fill(random(255), random(255), random(255));
  // changing the size
    if(width<20*m*35) {
     width=width*m
     height=height*m/1.06
  }
    if (width>=20*m*35) {
     width = 20
     height = 40
    }

}
