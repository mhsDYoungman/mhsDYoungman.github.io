/* using the keyboard
Derek Youngman
4/23/2019
*/
x = 10
y = 10
size = 100
r = 100
g = 100
b = 100
function setup() {
  // put setup code here
  createCanvas(1280, 877.49)
}

function draw() {
  // put drawing code here
  if (keyIsDown(SHIFT)) {
   r = random(0, 255)
   g = random(0, 255)
   b = random(0, 255)
  }
  background(r, g, b)
  fill(255-r, 255-g, 255-b)
  rect(x, y, size, size)
  if (keyIsDown(RIGHT_ARROW)) {
    x=x+10
  }
  if (keyIsDown(LEFT_ARROW)) {
    x=x-10
  }
  if (keyIsDown(UP_ARROW)) {
    y=y-10
  }
  if (keyIsDown(DOWN_ARROW)) {
    y=y+10
  }


}
