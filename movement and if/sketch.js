/*
Movement Assignment
Created by Derek Youngman
April 15, 2019
*/
// global variables
let x1 = 20
let y1 = 100
let x1Speed = 0
let y1Speed = 7
let size = 100
let x2 = 400
let y2 = 400
let x2Speed = 4
let y2Speed = 4
let x3 = 600
let y3 = 700
let x3Speed = -4.5
let y3Speed = -4.5
let x4 = 1000
let y4 = 400
let x4Speed = 5
let y4Speed = 5
let x5 = 400
let y5 = 250
let x5Speed = -5.5
let y5Speed = -5.5
let hit = false
function setup() {
  // put setup code here
  createCanvas(1280, 877.49)
}
function draw() {
  // collison
  hit12 = collideRectRect(x1, y1, size, size, x2, y2, size, size)
  hit13 = collideRectRect(x1, y1, size, size, x3, y3, size, size)
  hit14 = collideRectRect(x1, y1, size, size, x4, y4, size, size)
  hit15 = collideRectRect(x1, y1, size, size, x5, y5, size, size)
  hit23 = collideRectRect(x2, y2, size, size, x3, y3, size, size)
  hit24 = collideRectRect(x2, y2, size, size, x4, y4, size, size)
  hit25 = collideRectRect(x2, y2, size, size, x5, y5, size, size)
  hit34 = collideRectRect(x3, y3, size, size, x4, y4, size, size)
  hit35 = collideRectRect(x3, y3, size, size, x5, y5, size, size)
  hit45 = collideRectRect(x4, y4, size, size, x5, y5, size, size)
  // put drawing code here
  background(255, 128, 0)
  if (hit12 || hit13 || hit14 || hit15){
    background(255, 0, 0)
    textSize(100)
    textAlign(CENTER)
    text('YOU LOSE!', width/2, height/2)
    textSize(25)
    text('PRESS F5 TO PLAY AGAIN', width/2, height/2+50)
  }
  else if(hit12===false || hit13===false || hit14===false || hit15===false) {
    // bounce back
  if (hit23 || hit24 || hit25) {
   x2Speed = x2Speed*(-1)
   y2Speed = y2Speed*(-1)
   }
  if (hit23 || hit34 || hit35) {
   x3Speed = x3Speed*(-1)
   y3Speed = y3Speed*(-1)
   }
  if (hit24 || hit34 || hit45) {
   x4Speed = x4Speed*(-1)
   y4Speed = y4Speed*(-1)
  }
  if(hit25 || hit35 || hit45) {
   x5Speed = x5Speed*(-1)
   y5Speed = y5Speed*(-1)
  }
  // rectangle movement
  fill(0, 255, 255)
  rect(x1, y1, size, size)// use arrows to change direction
  x1 = x1+x1Speed
  y1 = y1+y1Speed
  fill(0)
  rect(x2, y2, size, size)
  x2 = x2+x2Speed
  y2 = y2+y2Speed
  rect(x3, y3, size, size)
  x3 = x3+x3Speed
  y3 = y3+y3Speed
  rect(x4, y4, size, size)
  x4 = x4+x4Speed
  y4 = y4+y4Speed
  rect(x5, y5, size, size)
  x5 = x5+x5Speed
  y5 = y5+y5Speed
  // rectangle direction
   if (keyIsDown(LEFT_ARROW)) {
     x1Speed = -7
     y1Speed = 0
   }
   if (keyIsDown(RIGHT_ARROW)) {
     x1Speed = 7
     y1Speed = 0
   }
   if (keyIsDown(UP_ARROW)) {
     y1Speed = -7
     x1Speed = 0
   }
   if (keyIsDown(DOWN_ARROW)) {
     y1Speed = 7
     x1Speed = 0
   }
   if (y1>=height-size || y1<=0) {
    y1Speed = y1Speed*(-1)
   }
   if (x1>=width-size || x1<=0) {
    x1Speed = x1Speed*(-1)
   }
   if (x2>=width-size || x2<=0) {
   x2Speed = x2Speed*(-1)
   }
   if (y2>=height-size || y2<=0) {
   y2Speed = y2Speed*(-1)
   }
   if (x3>=width-size || x3<=0) {
     x3Speed = x3Speed*(-1)
   }
   if (y3>=height-size || y3<=0) {
     y3Speed = y3Speed*(-1)
   }
   if (x4>=width-size || x4<=0) {
     x4Speed = x4Speed*(-1)
   }
   if (y4>=height-size || y4<=0) {
     y4Speed = y4Speed*(-1)
   }
   if (x5>=width-size || x5<=0) {
     x5Speed = x5Speed*(-1)
   }
   if (y5>=height-size || y5<=0) {
     y5Speed = y5Speed*(-1)
   }
}
}
