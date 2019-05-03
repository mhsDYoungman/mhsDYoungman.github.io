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
let level = 0
function setup() {
  // put setup code here
  createCanvas(1280, 877.49)
}
function keyPressed() {
// answering the questions
// correct answers
  if (keyCode===65 && hit12===true) {
hit12=false
x1 = 20
y1 = 100
size = 100
x2 = 400
y2 = 400
x3 = 600
y3 = 700
x4 = 1000
y4 = 400
x5 = 400
y5 = 250
x2Speed = 4*1.5
y2Speed = 4*1.5
x3Speed = -4.5*1.5
y3Speed = -4.5*1.5
x4Speed = 5*1.5
y4Speed = 5*1.5
x5Speed = -5.5*1.5
y5Speed = -5.5*1.5
  }
  if (keyCode===68 && hit13===true) {
hit12=false
x1 = 20
y1 = 100
size = 100
x2 = 400
y2 = 400
x3 = 600
y3 = 700
x4 = 1000
y4 = 400
x5 = 400
y5 = 250
x2Speed = 4*1.5
y2Speed = 4*1.5
x3Speed = -4.5*1.5
y3Speed = -4.5*1.5
x4Speed = 5*1.5
y4Speed = 5*1.5
x5Speed = -5.5*1.5
y5Speed = -5.5*1.5

  }
  if (keyCode===70 && hit14===true) {
hit12=false
x1 = 20
y1 = 100
size = 100
x2 = 400
y2 = 400
x3 = 600
y3 = 700
x4 = 1000
y4 = 400
x5 = 400
y5 = 250
x2Speed = 4*1.5
y2Speed = 4*1.5
x3Speed = -4.5*1.5
y3Speed = -4.5*1.5
x4Speed = 5*1.5
y4Speed = 5*1.5
x5Speed = -5.5*1.5
y5Speed = -5.5*1.5
  }
  if (keyCode===72 && hit15===true) {
hit12=false
x1 = 20
y1 = 100
size = 100
x2 = 400
y2 = 400
x3 = 600
y3 = 700
x4 = 1000
y4 = 400
x5 = 400
y5 = 250
x2Speed = 4*1.5
y2Speed = 4*1.5
x3Speed = -4.5*1.5
y3Speed = -4.5*1.5
x4Speed = 5*1.5
y4Speed = 5*1.5
x5Speed = -5.5*1.5
y5Speed = -5.5*1.5
  }
  // incorrect answers
  if (keyCode===66 && hit12===true) {
  level=1
  hit12=false
  }
  if (keyCode===67 && hit13===true) {
  level=1
  hit13=false
  }
  if (keyCode===69 && hit14===true) {
  level=1
  hit14=false
  }
  if (keyCode===71 && hit15===true) {
  level=1
  hit15=false
  }

}
function draw() {

  if (level===1) {
    background(0)
    textSize(100)
    textAlign(CENTER)
    text('YOU LOSE!', width/2, height/2)
  }
  if(level===0){
    background(255, 128, 0)



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

  if (hit12){
    fill(0)
    background(255, 0, 0)
    textSize(100)
    textAlign(CENTER)
    text('YOU WERE HIT!', width/2, height/2)
    textSize(50)
    fill(255)
    text('WHAT IS (48/4(2+4))?', width/2, height/2+100)
    text('2', width/5, height/2+200)
    text('72', width/5*4, height/2+200)
    textSize(15)
    text('PRESS a TO CHOOSE THIS OPTION', width/5, height/2+250)
    text('PRESS b TO CHOOSE THIS OPTION', width/5*4, height/2+250)


  }
  else if (hit13){
    fill(0)
    background(255, 0, 0)
    textSize(100)
    textAlign(CENTER)
    text('YOU WERE HIT!', width/2, height/2)
    textSize(50)
    fill(255)
    text('WHAT IS (21+6/3+8)?', width/2, height/2+100)
    text('17', width/5, height/2+200)
    text('31', width/5*4, height/2+200)
    textSize(15)
    text('PRESS c TO CHOOSE THIS OPTION', width/5, height/2+250)
    text('PRESS d TO CHOOSE THIS OPTION', width/5*4, height/2+250)

  }
  else if (hit14){
    fill(0)
    background(255, 0, 0)
    textSize(100)
    textAlign(CENTER)
    text('YOU WERE HIT!', width/2, height/2)
    textSize(50)
    fill(255)
    text('WHAT IS (5!)?', width/2, height/2+100)
    text('5', width/5, height/2+200)
    text('120', width/5*4, height/2+200)
    textSize(15)
    text('PRESS e TO CHOOSE THIS OPTION', width/5, height/2+250)
    text('PRESS f TO CHOOSE THIS OPTION', width/5*4, height/2+250)

  }
  else if (hit15){
    fill(0)
    background(255, 0, 0)
    textSize(100)
    textAlign(CENTER)
    text('YOU WERE HIT!', width/2, height/2)
    textSize(50)
    fill(255)
    text('WHAT IS (48*9/3+7*0)?', width/2, height/2+100)
    text('0', width/5, height/2+200)
    text('16', width/5*4, height/2+200)
    textSize(15)
    text('PRESS g TO CHOOSE THIS OPTION', width/5, height/2+250)
    text('PRESS h TO CHOOSE THIS OPTION', width/5*4, height/2+250)

  }
// movement
  else if(hit12===false || hit13===false || hit14===false || hit15===false) {
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
  // rectangle movement
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
}
