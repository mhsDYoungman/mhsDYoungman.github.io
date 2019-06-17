/*
Derek Youngman
Left or Right?
6/4/2019
*/
let s = 100 // enemy seperation
let width = 1275 // window width was not functioning properly
let height = 877 // window height was not functioning properly
let circleSize = 20 // player size
let level = 0 // levels
let circleX = width/2 // chracter x
let circleY = height-height/80 // character y
let borderM = 6 // border multiplier to determine size in relation to width
let enemyX = -s+width/2-300 // column 1 enemies
let enemyX2 = -s*2+width/2-300 // column 2 enemies
let enemyX3 = -s*3+width/2-300 // column 3 enemies
let enemyX4 = -s*4+width/2-300 // column 4 enemies
let enemyX5 = -s*5+width/2-300 // column 5 enemies
let enemyX6 = -s*6+width/2-300 // column 6 enemies
let enemyX7 = -s*7+width/2-300 // column 7 enemies
let enemyX8 = -s*8+width/2-300 // column 8 enemies
let enemyX9 = -s*9+width/2-300 // column 9 enemies
let enemyX10 = -s*10+width/2-300 // column 10 enemies
let enemyX11 = -s*11+width/2-300 // column 11 enemies
let enemyY = 0 // column 1 enemies
let enemyY2 = -10 // column 2 enemies
let enemyY3 = 10 // column 3 enemies
let enemyY4 = -20 // column 4 enemies
let enemyY5 = 20 // column 5 enemies
let enemyY6 = -30 // column 6 enemies
let enemyY7 = 30 // column 7 enemies
let enemyY8 = -40 // column 8 enemies
let enemyY9 = 40 // column 9 enemies
let enemyY10 = -50 // column 10 enemies
let enemyY11 = 50 // column 11 enemies
let enemySize = 20 // size of enemies
let speed = 2.3 // character speed
let s1 = 2.3  // character speed 1
let s2 = 4.5 // character speed 2
let eSpeed = 4.5 // enemy speed
let n = 125 // looping speration in y
let v = 2 // x vraiable for looping
let rand = 0 // random variable for decision level
function setup() {
  // put setup code here
  createCanvas(width, height)
} // end setup

function draw() {
  // start screen
  if (level===0) {
    background(0)
    fill(255)
    textAlign(CENTER)
    textSize(100)
    text('PRESS ENTER TO START', width/2, height/2)
    textSize(30)
    text('USE THE ARROWS TO AVOID THE SQAURES AND GET TO THE END', width/2, height/2+200)
    // start button
    if (keyIsDown(ENTER)) {
      level=1
    }
  } // end level 0
  if (level===1) {
    background(255)
    fill(0, 255, 0)
    // character
    ellipse(circleX, circleY, circleSize, circleSize)
    // move forward
    if (keyIsDown(UP_ARROW)) {
      circleY-=speed

    }
    // move back
    else if (keyIsDown(DOWN_ARROW) && circleY + circleSize/2 < height) {
      circleY+=speed

    }
    // move left
    else if (keyIsDown(LEFT_ARROW) && circleX - circleSize/2 > width/borderM+circleSize/2) {
      circleX-=speed

    }
    // move right
    else if (keyIsDown(RIGHT_ARROW) && circleX + circleSize/2 < width-width/borderM-circleSize/2) {
      circleX+=speed

    }

    // enemies
    drawEnemies1()

    // borders
    fill(0)
    rect(0, 0, width/borderM, height)
    rect(width-width/borderM, 0, width/borderM, height)

    // gettin to the end
    hitE = collideRectCircle(0, -10, width, 10, circleX, circleY, circleSize)
    rect(0, -10, width, 10)
    if (hitE) {
      circleX = width/2
      circleY = height-height/80
      level = 3
    }

  } // end level 1
  if (level===2) {
    // if you lose
    background(255, 0, 0)
    textAlign(CENTER)
    textSize(40)
    text('YOU REALLY OUT HERE LOSING ON THE FIRST LEVEL?', width/2, height/2)
    textSize(20)
    text('PRESS r  TO RESTART', width/2, height/2+150)
    if (keyIsDown(82)) {
      circleX = width/2
      circleY = height-height/80
      enemyX = -s+width/2-300
      enemyX2 = -s*2+width/2-300
      enemyX3 = -s*3+width/2-300
      enemyX4 = -s*4+width/2-300
      enemyX5 = -s*5+width/2-300
      enemyX6 = -s*6+width/2-300
      enemyX7 = -s*7+width/2-300
      enemyX8 = -s*8+width/2-300
      enemyX9 = -s*9+width/2-300
      enemyX10 = -s*10+width/2-300
      enemyX11 = -s*11+width/2-300
      level=0
    }
  } // end level 2
  if (level===3) {
    // decision level
    speed = s2
    background(0, 127, 255)
    fill(0)
    textAlign(CENTER)
    textSize(100)
    text('CHOOSE A PATH', width/2, height/4)
    // border
    noStroke()
    fill(255)
    rect(width/2-200, height/2+95, 400, height/2)
    rect(0, height/2-150, width, 250)
    stroke(0)
    fill(0, 255, 0)
    // character
    ellipse(circleX, circleY, circleSize, circleSize)
    // move forward
    if (keyIsDown(UP_ARROW) && circleY - circleSize/2 > height/2-150) {
      circleY-=speed
    }
    // move left
    else if (keyIsDown(LEFT_ARROW) && circleX - circleSize/2 > width/2-200 && circleY + circleSize/2 > height/2+95) {
      circleX-=speed

    }
    else if (keyIsDown(LEFT_ARROW) && circleY - circleSize/2 < height/2+95) {
      circleX-=speed

    }
    // move right
    else if (keyIsDown(RIGHT_ARROW) && circleX  + circleSize/2< width/2+200 && circleY + circleSize/2 > height/2+95) {
      circleX+=speed

    }
    else if (keyIsDown(RIGHT_ARROW) && circleY + circleSize/2 < height/2+95) {
      circleX+=speed
    }
    // randomly choosing your next challange
    if (circleX - circleSize/2 <= 0 || circleX + circleSize/2 >= width) {
      rand = random(0,100)
      if (rand >= 50) {
        circleX = width/2
        circleY = height-height/80
        speed = s1
        level = 41
      }
      if (rand < 50) {
        circleX = width/2
        circleY = height-height/80
        speed = s1
        level = 51
      }
    }
  } // end level 3
  if (level===41) {
    // start screen for easier version of level 2
    background(0)
    fill(255)
    textAlign(CENTER)
    textSize(100)
    text('PRESS ENTER TO START', width/2, height/2)
    textSize(40)
    text('YOU ARE IMMUNE TO GREEN SQUARES', width/2, height/2+200)
    // start button
    if (keyIsDown(ENTER)) {
      enemyX = -s+width/2-300
      enemyX2 = -s*2+width/2-300
      enemyX3 = -s*3+width/2-300
      enemyX4 = -s*4+width/2-300
      enemyX5 = -s*5+width/2-300
      enemyX6 = -s*6+width/2-300
      enemyX7 = -s*7+width/2-300
      enemyX8 = -s*8+width/2-300
      enemyX9 = -s*9+width/2-300
      enemyX10 = -s*10+width/2-300
      enemyX11 = -s*11+width/2-300
      level=4
    }
  } // end level 41
  if (level===51) {
    // start screen for harder version of level 2
    background(0)
    fill(255)
    textAlign(CENTER)
    textSize(100)
    text('PRESS ENTER TO START', width/2, height/2)
    textSize(40)
    text('THE KEYS ARE INVERTED (LEFT = RIGHT AND DOWN = UP)', width/2, height/2+200)
    // start button
    if (keyIsDown(ENTER)) {
      level=5
      enemyX = -s+width/2-300
      enemyX2 = -s*2+width/2-300
      enemyX3 = -s*3+width/2-300
      enemyX4 = -s*4+width/2-300
      enemyX5 = -s*5+width/2-300
      enemyX6 = -s*6+width/2-300
      enemyX7 = -s*7+width/2-300
      enemyX8 = -s*8+width/2-300
      enemyX9 = -s*9+width/2-300
      enemyX10 = -s*10+width/2-300
      enemyX11 = -s*11+width/2-300
    }
  } // end level 51
  if (level === 4) {
    background(255)
    fill(0, 255, 0)
    // character
    ellipse(circleX, circleY, circleSize, circleSize)
    // move forward
    if (keyIsDown(UP_ARROW)) {
      circleY-=speed

    }
    // move back
    else if (keyIsDown(DOWN_ARROW) && circleY + circleSize/2 < height) {
      circleY+=speed

    }
    // move left
    else if (keyIsDown(LEFT_ARROW) && circleX - circleSize/2 > width/borderM+circleSize/2) {
      circleX-=speed

    }
    // move right
    else if (keyIsDown(RIGHT_ARROW) && circleX + circleSize/2 < width-width/borderM-circleSize/2) {
      circleX+=speed

    }

    // enemies
    drawEnemies2()

    // borders
    fill(0)
    rect(0, 0, width/borderM, height)
    rect(width-width/borderM, 0, width/borderM, height)
    // if you win
    hitE = collideRectCircle(0, -10, width, 10, circleX, circleY, circleSize)
    rect(0, -10, width, 10)

    if (hitE) {
      level = 6
    }
  } // end level 4
  if (level === 5) {
    background(255)
    fill(0, 255, 0)
    // character
    ellipse(circleX, circleY, circleSize, circleSize)
    // move forward
    if (keyIsDown(DOWN_ARROW)) {
      circleY-=speed

    }
    // move back
    else if (keyIsDown(UP_ARROW) && circleY + circleSize/2 < height) {
      circleY+=speed

    }
    // move left
    else if (keyIsDown(RIGHT_ARROW) && circleX - circleSize/2 > width/borderM+circleSize/2) {
      circleX-=speed

    }
    // move right
    else if (keyIsDown(LEFT_ARROW) && circleX + circleSize/2 < width-width/borderM-circleSize/2) {
      circleX+=speed

    }

    // enemies
    drawEnemies3()

    // border
    fill(0)
    rect(0, 0, width/borderM, height)
    rect(width-width/borderM, 0, width/borderM, height)
    // if you win
    hitE = collideRectCircle(0, -10, width, 10, circleX, circleY, circleSize)
    rect(0, -10, width, 10)

    if (hitE) {
      level = 6
    }
  } // end level 5
  if (level===6) {
    // victory level
    background(255)
    fill(0)
    textAlign(CENTER)
    textSize(100)
    text('YOU WIN!', width/2, height/2)
    textSize(50)
    text('PRESS r  TO RESTART', width/2, height/2+150)
    if (keyIsDown(82)) {
      circleX = width/2
      circleY = height-height/80
      enemyX = -s+width/2-300
      enemyX2 = -s*2+width/2-300
      enemyX3 = -s*3+width/2-300
      enemyX4 = -s*4+width/2-300
      enemyX5 = -s*5+width/2-300
      enemyX6 = -s*6+width/2-300
      enemyX7 = -s*7+width/2-300
      enemyX8 = -s*8+width/2-300
      enemyX9 = -s*9+width/2-300
      enemyX10 = -s*10+width/2-300
      enemyX11 = -s*11+width/2-300
      level=0
    }
  } // end level 6
  if (level===7) {
    // losing on level 4
    background(255, 0, 0)
    textAlign(CENTER)
    textSize(50)
    text('YOU HAD THE EASY PATH AND YOU STILL LOST', width/2, height/2)
    textSize(25)
    text('PRESS r  TO RESTART', width/2, height/2+150)
    if (keyIsDown(82)) {
      circleX = width/2
      circleY = height-height/80
      enemyX = -s+width/2-300
      enemyX2 = -s*2+width/2-300
      enemyX3 = -s*3+width/2-300
      enemyX4 = -s*4+width/2-300
      enemyX5 = -s*5+width/2-300
      enemyX6 = -s*6+width/2-300
      enemyX7 = -s*7+width/2-300
      enemyX8 = -s*8+width/2-300
      enemyX9 = -s*9+width/2-300
      enemyX10 = -s*10+width/2-300
      enemyX11 = -s*11+width/2-300
      level=0
    }
  } // end level 7
  if (level===8) {
    // losing on level 5
    background(255, 0, 0)
    textAlign(CENTER)
    textSize(100)
    text('NICE TRY', width/2, height/2)
    textSize(50)
    text('PRESS r  TO RESTART', width/2, height/2+150)
    if (keyIsDown(82)) {
      circleX = width/2
      circleY = height-height/80
      enemyX = -s+width/2-300
      enemyX2 = -s*2+width/2-300
      enemyX3 = -s*3+width/2-300
      enemyX4 = -s*4+width/2-300
      enemyX5 = -s*5+width/2-300
      enemyX6 = -s*6+width/2-300
      enemyX7 = -s*7+width/2-300
      enemyX8 = -s*8+width/2-300
      enemyX9 = -s*9+width/2-300
      enemyX10 = -s*10+width/2-300
      enemyX11 = -s*11+width/2-300
      level=0
    }
  } // end level 8
} // end draw


function drawEnemies1() {
  // collision with enemies
  hit1 = collideRectCircle(enemyX, enemyY, enemySize, enemySize,circleX, circleY, circleSize)
  hit2 = collideRectCircle(enemyX, enemyY+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit3 = collideRectCircle(enemyX, enemyY+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit4 = collideRectCircle(enemyX, enemyY+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit5 = collideRectCircle(enemyX, enemyY+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit6 = collideRectCircle(enemyX, enemyY+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit7 = collideRectCircle(enemyX, enemyY+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit8 = collideRectCircle(enemyX2, enemyY2, enemySize, enemySize,circleX, circleY, circleSize)
  hit9 = collideRectCircle(enemyX2, enemyY2+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit10 = collideRectCircle(enemyX2, enemyY2+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit11 = collideRectCircle(enemyX2, enemyY2+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit12 = collideRectCircle(enemyX2, enemyY2+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit13 = collideRectCircle(enemyX2, enemyY2+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit14 = collideRectCircle(enemyX2, enemyY2+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit15 = collideRectCircle(enemyX3, enemyY3, enemySize, enemySize,circleX, circleY, circleSize)
  hit16 = collideRectCircle(enemyX3, enemyY3+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit17 = collideRectCircle(enemyX3, enemyY3+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit18 = collideRectCircle(enemyX3, enemyY3+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit19 = collideRectCircle(enemyX3, enemyY3+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit20 = collideRectCircle(enemyX3, enemyY3+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit21 = collideRectCircle(enemyX3, enemyY3+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit22 = collideRectCircle(enemyX4, enemyY4, enemySize, enemySize,circleX, circleY, circleSize)
  hit23 = collideRectCircle(enemyX4, enemyY4+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit24 = collideRectCircle(enemyX4, enemyY4+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit25 = collideRectCircle(enemyX4, enemyY4+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit26 = collideRectCircle(enemyX4, enemyY4+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit27 = collideRectCircle(enemyX4, enemyY4+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit28 = collideRectCircle(enemyX4, enemyY4+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit29 = collideRectCircle(enemyX5, enemyY5, enemySize, enemySize,circleX, circleY, circleSize)
  hit30 = collideRectCircle(enemyX5, enemyY5+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit31 = collideRectCircle(enemyX5, enemyY5+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit32 = collideRectCircle(enemyX5, enemyY5+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit33 = collideRectCircle(enemyX5, enemyY5+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit34 = collideRectCircle(enemyX5, enemyY5+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit35 = collideRectCircle(enemyX5, enemyY5+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit36 = collideRectCircle(enemyX6, enemyY6, enemySize, enemySize,circleX, circleY, circleSize)
  hit37 = collideRectCircle(enemyX6, enemyY6+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit38 = collideRectCircle(enemyX6, enemyY6+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit39 = collideRectCircle(enemyX6, enemyY6+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit40 = collideRectCircle(enemyX6, enemyY6+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit41 = collideRectCircle(enemyX6, enemyY6+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit42 = collideRectCircle(enemyX6, enemyY6+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit43 = collideRectCircle(enemyX7, enemyY7, enemySize, enemySize,circleX, circleY, circleSize)
  hit44 = collideRectCircle(enemyX7, enemyY7+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit45 = collideRectCircle(enemyX7, enemyY7+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit46 = collideRectCircle(enemyX7, enemyY7+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit47 = collideRectCircle(enemyX7, enemyY7+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit48 = collideRectCircle(enemyX7, enemyY7+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit49 = collideRectCircle(enemyX7, enemyY7+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit50 = collideRectCircle(enemyX8, enemyY8, enemySize, enemySize,circleX, circleY, circleSize)
  hit51 = collideRectCircle(enemyX8, enemyY8+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit52 = collideRectCircle(enemyX8, enemyY8+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit53 = collideRectCircle(enemyX8, enemyY8+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit54 = collideRectCircle(enemyX8, enemyY8+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit55 = collideRectCircle(enemyX8, enemyY8+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit56 = collideRectCircle(enemyX8, enemyY8+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit57 = collideRectCircle(enemyX9, enemyY9, enemySize, enemySize,circleX, circleY, circleSize)
  hit58 = collideRectCircle(enemyX9, enemyY9+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit59 = collideRectCircle(enemyX9, enemyY9+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit60 = collideRectCircle(enemyX9, enemyY9+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit61 = collideRectCircle(enemyX9, enemyY9+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit62 = collideRectCircle(enemyX9, enemyY9+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit63 = collideRectCircle(enemyX9, enemyY9+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit64 = collideRectCircle(enemyX10, enemyY10, enemySize, enemySize,circleX, circleY, circleSize)
  hit65 = collideRectCircle(enemyX10, enemyY10+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit66 = collideRectCircle(enemyX10, enemyY10+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit67 = collideRectCircle(enemyX10, enemyY10+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit68 = collideRectCircle(enemyX10, enemyY10+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit69 = collideRectCircle(enemyX10, enemyY10+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit70 = collideRectCircle(enemyX10, enemyY10+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit71 = collideRectCircle(enemyX11, enemyY11, enemySize, enemySize,circleX, circleY, circleSize)
  hit72 = collideRectCircle(enemyX11, enemyY11+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit73 = collideRectCircle(enemyX11, enemyY11+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit74 = collideRectCircle(enemyX11, enemyY11+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit75 = collideRectCircle(enemyX11, enemyY11+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit76 = collideRectCircle(enemyX11, enemyY11+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit77 = collideRectCircle(enemyX11, enemyY11+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit78 = collideRectCircle(enemyX, enemyY+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit79 = collideRectCircle(enemyX2, enemyY2+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit80 = collideRectCircle(enemyX3, enemyY3+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit81 = collideRectCircle(enemyX4, enemyY4+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit82 = collideRectCircle(enemyX5, enemyY5+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit83 = collideRectCircle(enemyX6, enemyY6+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit84 = collideRectCircle(enemyX7, enemyY7+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit85 = collideRectCircle(enemyX8, enemyY8+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit86 = collideRectCircle(enemyX9, enemyY9+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit87 = collideRectCircle(enemyX10, enemyY10+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit88 = collideRectCircle(enemyX11, enemyY11+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  // enemy movement
  enemyX+=eSpeed
  enemyX2+=eSpeed
  enemyX3+=eSpeed
  enemyX4+=eSpeed
  enemyX5+=eSpeed
  enemyX6+=eSpeed
  enemyX7+=eSpeed
  enemyX8+=eSpeed
  enemyX9+=eSpeed
  enemyX10+=eSpeed
  enemyX11+=eSpeed
  while (enemyY<height) {
    // drawing the enemies
    fill(255, 0, 0)
    rect(enemyX, enemyY, enemySize, enemySize)
    rect(enemyX2, enemyY2, enemySize, enemySize)
    rect(enemyX3, enemyY3, enemySize, enemySize)
    rect(enemyX4, enemyY4, enemySize, enemySize)
    rect(enemyX5, enemyY5, enemySize, enemySize)
    rect(enemyX6, enemyY6, enemySize, enemySize)
    rect(enemyX7, enemyY7, enemySize, enemySize)
    rect(enemyX8, enemyY8, enemySize, enemySize)
    rect(enemyX9, enemyY9, enemySize, enemySize)
    rect(enemyX10, enemyY10, enemySize, enemySize)
    rect(enemyX11, enemyY11, enemySize, enemySize)
    enemyY+=n
    enemyY2+=n
    enemyY3+=n
    enemyY4+=n
    enemyY5+=n
    enemyY6+=n
    enemyY7+=n
    enemyY8+=n
    enemyY9+=n
    enemyY10+=n
    enemyY11+=n
  }
  // resetting the y
  if (enemyY>height-50-circleSize) {
    enemyY=0
  }
  if (enemyY2>height-50-circleSize) {
    enemyY2=-10
  }
  if (enemyY3>height-50-circleSize) {
    enemyY3=10
  }
  if (enemyY4>height-50-circleSize) {
    enemyY4=-20
  }
  if (enemyY5>height-50-circleSize) {
    enemyY5=20
  }
  if (enemyY6>height-50-circleSize) {
    enemyY6=-30
  }
  if (enemyY7>height-50-circleSize) {
    enemyY7=30
  }
  if (enemyY8>height-50-circleSize) {
    enemyY8=-40
  }
  if (enemyY9>height-50-circleSize) {
    enemyY9=40
  }
  if (enemyY10>height-50-circleSize) {
    enemyY10=-50
  }
  if (enemyY11>height-50-circleSize) {
    enemyY11=50
  }


  // resetting the x
  if (enemyX>width-width/borderM) {
    enemyX=random(-v,v)
  }
  if (enemyX2>width-width/borderM) {
    enemyX2=random(-v,v)
  }
  if (enemyX3>width-width/borderM) {
    enemyX3=random(-v,v)
  }
  if (enemyX4>width-width/borderM) {
    enemyX4=random(-v,v)
  }
  if (enemyX5>width-width/borderM) {
    enemyX5=random(-v,v)
  }
  if (enemyX6>width-width/borderM) {
    enemyX6=random(-v,v)
  }
  if (enemyX7>width-width/borderM) {
    enemyX7=random(-v,v)
  }
  if (enemyX8>width-width/borderM) {
    enemyX8=random(-v,v)
  }
  if (enemyX9>width-width/borderM) {
    enemyX9=random(-v,v)
  }
  if (enemyX10>width-width/borderM) {
    enemyX10=random(-v,v)
  }
  if (enemyX11>width-width/borderM) {
    enemyX11=random(-v,v)
  }
  // if you lose
  if (hit1 || hit2 || hit3 || hit4 || hit5 || hit6 || hit7 || hit8 || hit9 || hit10 || hit11 || hit12 || hit13 || hit14 || hit15 || hit16 || hit17 || hit18 || hit19 || hit20 || hit21 || hit22 || hit23 || hit24 || hit25 || hit26 || hit27 || hit28 || hit29 || hit30 || hit31 || hit32 || hit33 || hit34 || hit35 || hit36 || hit37 || hit38 || hit39 || hit40 || hit41 || hit42 || hit43 || hit44 || hit45 || hit46 || hit47 || hit48 || hit49 || hit50 || hit51 || hit52 || hit53 || hit54 || hit55 || hit56 || hit57 || hit58 || hit59 || hit60 || hit61 || hit62 || hit63 || hit64 || hit65 || hit66 || hit67 || hit68 || hit69 || hit70 || hit71 || hit72 || hit73 || hit74 || hit75 || hit76 || hit77 || hit78 || hit79 || hit80 || hit81 || hit82 || hit83 || hit84 || hit85 || hit86 || hit87 || hit88 )
    level=2
} // end drawEnemies1
function drawEnemies2() {
  // collision with enemies
  hit1 = collideRectCircle(enemyX, enemyY, enemySize, enemySize,circleX, circleY, circleSize)
  hit2 = collideRectCircle(enemyX, enemyY+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit3 = collideRectCircle(enemyX, enemyY+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit4 = collideRectCircle(enemyX, enemyY+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit5 = collideRectCircle(enemyX, enemyY+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit6 = collideRectCircle(enemyX, enemyY+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit7 = collideRectCircle(enemyX, enemyY+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit8 = collideRectCircle(enemyX2, enemyY2, enemySize, enemySize,circleX, circleY, circleSize)
  hit9 = collideRectCircle(enemyX2, enemyY2+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit10 = collideRectCircle(enemyX2, enemyY2+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit11 = collideRectCircle(enemyX2, enemyY2+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit12 = collideRectCircle(enemyX2, enemyY2+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit13 = collideRectCircle(enemyX2, enemyY2+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit14 = collideRectCircle(enemyX2, enemyY2+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit15 = collideRectCircle(enemyX3, enemyY3, enemySize, enemySize,circleX, circleY, circleSize)
  hit16 = collideRectCircle(enemyX3, enemyY3+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit17 = collideRectCircle(enemyX3, enemyY3+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit18 = collideRectCircle(enemyX3, enemyY3+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit19 = collideRectCircle(enemyX3, enemyY3+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit20 = collideRectCircle(enemyX3, enemyY3+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit21 = collideRectCircle(enemyX3, enemyY3+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit22 = collideRectCircle(enemyX4, enemyY4, enemySize, enemySize,circleX, circleY, circleSize)
  hit23 = collideRectCircle(enemyX4, enemyY4+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit24 = collideRectCircle(enemyX4, enemyY4+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit25 = collideRectCircle(enemyX4, enemyY4+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit26 = collideRectCircle(enemyX4, enemyY4+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit27 = collideRectCircle(enemyX4, enemyY4+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit28 = collideRectCircle(enemyX4, enemyY4+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit29 = collideRectCircle(enemyX5, enemyY5, enemySize, enemySize,circleX, circleY, circleSize)
  hit30 = collideRectCircle(enemyX5, enemyY5+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit31 = collideRectCircle(enemyX5, enemyY5+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit32 = collideRectCircle(enemyX5, enemyY5+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit33 = collideRectCircle(enemyX5, enemyY5+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit34 = collideRectCircle(enemyX5, enemyY5+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit35 = collideRectCircle(enemyX5, enemyY5+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit36 = collideRectCircle(enemyX6, enemyY6, enemySize, enemySize,circleX, circleY, circleSize)
  hit37 = collideRectCircle(enemyX6, enemyY6+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit38 = collideRectCircle(enemyX6, enemyY6+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit39 = collideRectCircle(enemyX6, enemyY6+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit40 = collideRectCircle(enemyX6, enemyY6+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit41 = collideRectCircle(enemyX6, enemyY6+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit42 = collideRectCircle(enemyX6, enemyY6+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit43 = collideRectCircle(enemyX7, enemyY7, enemySize, enemySize,circleX, circleY, circleSize)
  hit44 = collideRectCircle(enemyX7, enemyY7+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit45 = collideRectCircle(enemyX7, enemyY7+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit46 = collideRectCircle(enemyX7, enemyY7+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit47 = collideRectCircle(enemyX7, enemyY7+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit48 = collideRectCircle(enemyX7, enemyY7+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit49 = collideRectCircle(enemyX7, enemyY7+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit50 = collideRectCircle(enemyX8, enemyY8, enemySize, enemySize,circleX, circleY, circleSize)
  hit51 = collideRectCircle(enemyX8, enemyY8+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit52 = collideRectCircle(enemyX8, enemyY8+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit53 = collideRectCircle(enemyX8, enemyY8+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit54 = collideRectCircle(enemyX8, enemyY8+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit55 = collideRectCircle(enemyX8, enemyY8+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit56 = collideRectCircle(enemyX8, enemyY8+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit57 = collideRectCircle(enemyX9, enemyY9, enemySize, enemySize,circleX, circleY, circleSize)
  hit58 = collideRectCircle(enemyX9, enemyY9+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit59 = collideRectCircle(enemyX9, enemyY9+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit60 = collideRectCircle(enemyX9, enemyY9+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit61 = collideRectCircle(enemyX9, enemyY9+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit62 = collideRectCircle(enemyX9, enemyY9+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit63 = collideRectCircle(enemyX9, enemyY9+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit78 = collideRectCircle(enemyX, enemyY+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit79 = collideRectCircle(enemyX2, enemyY2+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit80 = collideRectCircle(enemyX3, enemyY3+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit81 = collideRectCircle(enemyX4, enemyY4+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit82 = collideRectCircle(enemyX5, enemyY5+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit83 = collideRectCircle(enemyX6, enemyY6+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit84 = collideRectCircle(enemyX7, enemyY7+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit85 = collideRectCircle(enemyX8, enemyY8+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit86 = collideRectCircle(enemyX9, enemyY9+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  // enemy movement
  enemyX+=eSpeed*1.2
  enemyX2+=eSpeed*1.2
  enemyX3+=eSpeed*1.2
  enemyX4+=eSpeed*1.2
  enemyX5+=eSpeed*1.2
  enemyX6+=eSpeed*1.2
  enemyX7+=eSpeed*1.2
  enemyX8+=eSpeed*1.2
  enemyX9+=eSpeed*1.2
  enemyX10+=eSpeed*1.2
  enemyX11+=eSpeed*1.2
  while (enemyY<height) {
    // drawing the enmies
    fill(255, 0, 0)
    rect(enemyX, enemyY, enemySize, enemySize)
    rect(enemyX2, enemyY2, enemySize, enemySize)
    rect(enemyX3, enemyY3, enemySize, enemySize)
    rect(enemyX4, enemyY4, enemySize, enemySize)
    rect(enemyX5, enemyY5, enemySize, enemySize)
    rect(enemyX6, enemyY6, enemySize, enemySize)
    rect(enemyX7, enemyY7, enemySize, enemySize)
    rect(enemyX8, enemyY8, enemySize, enemySize)
    rect(enemyX9, enemyY9, enemySize, enemySize)
    fill(0, 255, 0)
    rect(enemyX10, enemyY10, enemySize, enemySize)
    rect(enemyX11, enemyY11, enemySize, enemySize)
    enemyY+=n
    enemyY2+=n
    enemyY3+=n
    enemyY4+=n
    enemyY5+=n
    enemyY6+=n
    enemyY7+=n
    enemyY8+=n
    enemyY9+=n
    enemyY10+=n
    enemyY11+=n
  }
  // reseting the y
  if (enemyY>height-50-circleSize) {
    enemyY=0
  }
  if (enemyY2>height-50-circleSize) {
    enemyY2=-10
  }
  if (enemyY3>height-50-circleSize) {
    enemyY3=10
  }
  if (enemyY4>height-50-circleSize) {
    enemyY4=-20
  }
  if (enemyY5>height-50-circleSize) {
    enemyY5=20
  }
  if (enemyY6>height-50-circleSize) {
    enemyY6=-30
  }
  if (enemyY7>height-50-circleSize) {
    enemyY7=30
  }
  if (enemyY8>height-50-circleSize) {
    enemyY8=-40
  }
  if (enemyY9>height-50-circleSize) {
    enemyY9=40
  }
  if (enemyY10>height-50-circleSize) {
    enemyY10=-50
  }
  if (enemyY11>height-50-circleSize) {
    enemyY11=50
  }


  // reseting the x
  if (enemyX>width-width/borderM) {
    enemyX=random(-v,v)
  }
  if (enemyX2>width-width/borderM) {
    enemyX2=random(-v,v)
  }
  if (enemyX3>width-width/borderM) {
    enemyX3=random(-v,v)
  }
  if (enemyX4>width-width/borderM) {
    enemyX4=random(-v,v)
  }
  if (enemyX5>width-width/borderM) {
    enemyX5=random(-v,v)
  }
  if (enemyX6>width-width/borderM) {
    enemyX6=random(-v,v)
  }
  if (enemyX7>width-width/borderM) {
    enemyX7=random(-v,v)
  }
  if (enemyX8>width-width/borderM) {
    enemyX8=random(-v,v)
  }
  if (enemyX9>width-width/borderM) {
    enemyX9=random(-v,v)
  }
  if (enemyX10>width-width/borderM) {
    enemyX10=random(-v,v)
  }
  if (enemyX11>width-width/borderM) {
    enemyX11=random(-v,v)
  }
  // if you lose
  if (hit1 || hit2 || hit3 || hit4 || hit5 || hit6 || hit7 || hit8 || hit9 || hit10 || hit11 || hit12 || hit13 || hit14 || hit15 || hit16 || hit17 || hit18 || hit19 || hit20 || hit21 || hit22 || hit23 || hit24 || hit25 || hit26 || hit27 || hit28 || hit29 || hit30 || hit31 || hit32 || hit33 || hit34 || hit35 || hit36 || hit37 || hit38 || hit39 || hit40 || hit41 || hit42 || hit43 || hit44 || hit45 || hit46 || hit47 || hit48 || hit49 || hit50 || hit51 || hit52 || hit53 || hit54 || hit55 || hit56 || hit57 || hit58 || hit59 || hit60 || hit61 || hit62 || hit63 || hit78 || hit79 || hit80 || hit81 || hit82 || hit83 || hit84 || hit85 || hit86)
    level=7
} // end draw enmies 2
function drawEnemies3() {
  // collision with enemies
  hit1 = collideRectCircle(enemyX, enemyY, enemySize, enemySize,circleX, circleY, circleSize)
  hit2 = collideRectCircle(enemyX, enemyY+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit3 = collideRectCircle(enemyX, enemyY+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit4 = collideRectCircle(enemyX, enemyY+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit5 = collideRectCircle(enemyX, enemyY+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit6 = collideRectCircle(enemyX, enemyY+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit7 = collideRectCircle(enemyX, enemyY+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit8 = collideRectCircle(enemyX2, enemyY2, enemySize, enemySize,circleX, circleY, circleSize)
  hit9 = collideRectCircle(enemyX2, enemyY2+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit10 = collideRectCircle(enemyX2, enemyY2+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit11 = collideRectCircle(enemyX2, enemyY2+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit12 = collideRectCircle(enemyX2, enemyY2+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit13 = collideRectCircle(enemyX2, enemyY2+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit14 = collideRectCircle(enemyX2, enemyY2+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit15 = collideRectCircle(enemyX3, enemyY3, enemySize, enemySize,circleX, circleY, circleSize)
  hit16 = collideRectCircle(enemyX3, enemyY3+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit17 = collideRectCircle(enemyX3, enemyY3+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit18 = collideRectCircle(enemyX3, enemyY3+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit19 = collideRectCircle(enemyX3, enemyY3+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit20 = collideRectCircle(enemyX3, enemyY3+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit21 = collideRectCircle(enemyX3, enemyY3+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit22 = collideRectCircle(enemyX4, enemyY4, enemySize, enemySize,circleX, circleY, circleSize)
  hit23 = collideRectCircle(enemyX4, enemyY4+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit24 = collideRectCircle(enemyX4, enemyY4+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit25 = collideRectCircle(enemyX4, enemyY4+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit26 = collideRectCircle(enemyX4, enemyY4+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit27 = collideRectCircle(enemyX4, enemyY4+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit28 = collideRectCircle(enemyX4, enemyY4+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit29 = collideRectCircle(enemyX5, enemyY5, enemySize, enemySize,circleX, circleY, circleSize)
  hit30 = collideRectCircle(enemyX5, enemyY5+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit31 = collideRectCircle(enemyX5, enemyY5+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit32 = collideRectCircle(enemyX5, enemyY5+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit33 = collideRectCircle(enemyX5, enemyY5+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit34 = collideRectCircle(enemyX5, enemyY5+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit35 = collideRectCircle(enemyX5, enemyY5+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit36 = collideRectCircle(enemyX6, enemyY6, enemySize, enemySize,circleX, circleY, circleSize)
  hit37 = collideRectCircle(enemyX6, enemyY6+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit38 = collideRectCircle(enemyX6, enemyY6+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit39 = collideRectCircle(enemyX6, enemyY6+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit40 = collideRectCircle(enemyX6, enemyY6+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit41 = collideRectCircle(enemyX6, enemyY6+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit42 = collideRectCircle(enemyX6, enemyY6+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit43 = collideRectCircle(enemyX7, enemyY7, enemySize, enemySize,circleX, circleY, circleSize)
  hit44 = collideRectCircle(enemyX7, enemyY7+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit45 = collideRectCircle(enemyX7, enemyY7+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit46 = collideRectCircle(enemyX7, enemyY7+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit47 = collideRectCircle(enemyX7, enemyY7+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit48 = collideRectCircle(enemyX7, enemyY7+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit49 = collideRectCircle(enemyX7, enemyY7+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit50 = collideRectCircle(enemyX8, enemyY8, enemySize, enemySize,circleX, circleY, circleSize)
  hit51 = collideRectCircle(enemyX8, enemyY8+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit52 = collideRectCircle(enemyX8, enemyY8+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit53 = collideRectCircle(enemyX8, enemyY8+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit54 = collideRectCircle(enemyX8, enemyY8+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit55 = collideRectCircle(enemyX8, enemyY8+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit56 = collideRectCircle(enemyX8, enemyY8+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit57 = collideRectCircle(enemyX9, enemyY9, enemySize, enemySize,circleX, circleY, circleSize)
  hit58 = collideRectCircle(enemyX9, enemyY9+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit59 = collideRectCircle(enemyX9, enemyY9+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit60 = collideRectCircle(enemyX9, enemyY9+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit61 = collideRectCircle(enemyX9, enemyY9+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit62 = collideRectCircle(enemyX9, enemyY9+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit63 = collideRectCircle(enemyX9, enemyY9+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit64 = collideRectCircle(enemyX10, enemyY10, enemySize, enemySize,circleX, circleY, circleSize)
  hit65 = collideRectCircle(enemyX10, enemyY10+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit66 = collideRectCircle(enemyX10, enemyY10+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit67 = collideRectCircle(enemyX10, enemyY10+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit68 = collideRectCircle(enemyX10, enemyY10+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit69 = collideRectCircle(enemyX10, enemyY10+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit70 = collideRectCircle(enemyX10, enemyY10+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit71 = collideRectCircle(enemyX11, enemyY11, enemySize, enemySize,circleX, circleY, circleSize)
  hit72 = collideRectCircle(enemyX11, enemyY11+n, enemySize, enemySize,circleX, circleY, circleSize)
  hit73 = collideRectCircle(enemyX11, enemyY11+n*2, enemySize, enemySize,circleX, circleY, circleSize)
  hit74 = collideRectCircle(enemyX11, enemyY11+n*3, enemySize, enemySize,circleX, circleY, circleSize)
  hit75 = collideRectCircle(enemyX11, enemyY11+n*4, enemySize, enemySize,circleX, circleY, circleSize)
  hit76 = collideRectCircle(enemyX11, enemyY11+n*5, enemySize, enemySize,circleX, circleY, circleSize)
  hit77 = collideRectCircle(enemyX11, enemyY11+n*6, enemySize, enemySize,circleX, circleY, circleSize)
  hit78 = collideRectCircle(enemyX, enemyY+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit79 = collideRectCircle(enemyX2, enemyY2+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit80 = collideRectCircle(enemyX3, enemyY3+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit81 = collideRectCircle(enemyX4, enemyY4+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit82 = collideRectCircle(enemyX5, enemyY5+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit83 = collideRectCircle(enemyX6, enemyY6+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit84 = collideRectCircle(enemyX7, enemyY7+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit85 = collideRectCircle(enemyX8, enemyY8+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit86 = collideRectCircle(enemyX9, enemyY9+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit87 = collideRectCircle(enemyX10, enemyY10+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  hit88 = collideRectCircle(enemyX11, enemyY11+n*7, enemySize, enemySize,circleX, circleY, circleSize)
  // enemy movement
  enemyX+=eSpeed*1.2
  enemyX2+=eSpeed*1.2
  enemyX3+=eSpeed*1.2
  enemyX4+=eSpeed*1.2
  enemyX5+=eSpeed*1.2
  enemyX6+=eSpeed*1.2
  enemyX7+=eSpeed*1.2
  enemyX8+=eSpeed*1.2
  enemyX9+=eSpeed*1.2
  enemyX10+=eSpeed*1.2
  enemyX11+=eSpeed*1.2
  while (enemyY<height) {
    // drawing the enmies
    fill(255, 0, 0)
    rect(enemyX, enemyY, enemySize, enemySize)
    rect(enemyX2, enemyY2, enemySize, enemySize)
    rect(enemyX3, enemyY3, enemySize, enemySize)
    rect(enemyX4, enemyY4, enemySize, enemySize)
    rect(enemyX5, enemyY5, enemySize, enemySize)
    rect(enemyX6, enemyY6, enemySize, enemySize)
    rect(enemyX7, enemyY7, enemySize, enemySize)
    rect(enemyX8, enemyY8, enemySize, enemySize)
    rect(enemyX9, enemyY9, enemySize, enemySize)
    rect(enemyX10, enemyY10, enemySize, enemySize)
    rect(enemyX11, enemyY11, enemySize, enemySize)
    enemyY+=n
    enemyY2+=n
    enemyY3+=n
    enemyY4+=n
    enemyY5+=n
    enemyY6+=n
    enemyY7+=n
    enemyY8+=n
    enemyY9+=n
    enemyY10+=n
    enemyY11+=n
  }
  // reseting the y
  if (enemyY>height-50-circleSize) {
    enemyY=0
  }
  if (enemyY2>height-50-circleSize) {
    enemyY2=-10
  }
  if (enemyY3>height-50-circleSize) {
    enemyY3=10
  }
  if (enemyY4>height-50-circleSize) {
    enemyY4=-20
  }
  if (enemyY5>height-50-circleSize) {
    enemyY5=20
  }
  if (enemyY6>height-50-circleSize) {
    enemyY6=-30
  }
  if (enemyY7>height-50-circleSize) {
    enemyY7=30
  }
  if (enemyY8>height-50-circleSize) {
    enemyY8=-40
  }
  if (enemyY9>height-50-circleSize) {
    enemyY9=40
  }
  if (enemyY10>height-50-circleSize) {
    enemyY10=-50
  }
  if (enemyY11>height-50-circleSize) {
    enemyY11=50
  }


  // reseting the x
  if (enemyX>width-width/borderM) {
    enemyX=random(-v,v)
  }
  if (enemyX2>width-width/borderM) {
    enemyX2=random(-v,v)
  }
  if (enemyX3>width-width/borderM) {
    enemyX3=random(-v,v)
  }
  if (enemyX4>width-width/borderM) {
    enemyX4=random(-v,v)
  }
  if (enemyX5>width-width/borderM) {
    enemyX5=random(-v,v)
  }
  if (enemyX6>width-width/borderM) {
    enemyX6=random(-v,v)
  }
  if (enemyX7>width-width/borderM) {
    enemyX7=random(-v,v)
  }
  if (enemyX8>width-width/borderM) {
    enemyX8=random(-v,v)
  }
  if (enemyX9>width-width/borderM) {
    enemyX9=random(-v,v)
  }
  if (enemyX10>width-width/borderM) {
    enemyX10=random(-v,v)
  }
  if (enemyX11>width-width/borderM) {
    enemyX11=random(-v,v)
  }
  // if you lose
  if (hit1 || hit2 || hit3 || hit4 || hit5 || hit6 || hit7 || hit8 || hit9 || hit10 || hit11 || hit12 || hit13 || hit14 || hit15 || hit16 || hit17 || hit18 || hit19 || hit20 || hit21 || hit22 || hit23 || hit24 || hit25 || hit26 || hit27 || hit28 || hit29 || hit30 || hit31 || hit32 || hit33 || hit34 || hit35 || hit36 || hit37 || hit38 || hit39 || hit40 || hit41 || hit42 || hit43 || hit44 || hit45 || hit46 || hit47 || hit48 || hit49 || hit50 || hit51 || hit52 || hit53 || hit54 || hit55 || hit56 || hit57 || hit58 || hit59 || hit60 || hit61 || hit62 || hit63 || hit64 || hit65 || hit66 || hit67 || hit68 || hit69 || hit70 || hit71 || hit72 || hit73 || hit74 || hit75 || hit76 || hit77 || hit78 || hit79 || hit80 || hit81 || hit82 || hit83 || hit84 || hit85 || hit86 || hit87 || hit88 )
    level=8
} // end drawEnemies3
