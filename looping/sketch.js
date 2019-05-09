/* Derek Youngman
Looping
5/7/2019*/
let x = 0
let y = 0
let r = 255
let g = 255
let b = 255
let m = 2
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
}
function draw() {
  // put drawing code here
  // colour changing
  background(255-r, 255-g, 255-b)
  hit = collideCircleCircle(x, y, 50, x, height-y, 50)
    if (hit) {
      r = random(0,255)
      b = random(0,255)
      g = random(0,255)
      m = -2
    }
  // circles
  while (x <= width) {
    fill(r, g, b)
    ellipse(x, y, 50, 50)
    ellipse(x, height-y, 50, 50)
    x = x + 50
  }
  if (x > width) {
    x = 0
    y = y + m
  }
  if (y === 0) {
    y = 0
    m = 2
  }
  }
