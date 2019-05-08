/* Brady, Derek and liam
   Bart Simpson
   Able to scale the code */

function setup() {
  // put setup code here
  createCanvas(1280, 875);
  background(255);
}

function draw() {
  let scale = 400;
  let x = width/2;
  let y = height/2;
  strokeWeight(2);
  drawears(x,y,scale);//Brady
  drawhead(x,y,scale);//Derek
  drawmouth(x,y,scale);//Liam & Derek
  draweyes(x,y,scale);//Brady
  drawnose(x,y,scale);//Brady
  drawhair(x,y,scale)//Derek
}


function drawhead(x,y,scale) {
  //Bart's face
  //Details(Brady)
  fill(255,220,40);
  rectMode(CENTER);
  stroke(0);
  rect(x-scale/150, y+scale/2.2, scale/4, scale/2.25, 20);
  rect(x-scale/150, y+scale/2.5, scale/1.56, scale/3.3, 30);

  //Chin(Brady)
  triangle(x-scale/8.8,y+scale/1.5,x-scale/11,y+scale/1.815,x-scale/5,y+scale/1.815)
  triangle(x+scale/10,y+scale/1.5,x+scale/11,y+scale/1.815,x+scale/5,y+scale/1.815)
  stroke(255, 220, 40);
  rect(x-scale/150, y+scale/1.91, scale/4.1, scale/3.4, 20);
  triangle(x-scale/8.9,y+scale/1.53,x-scale/100,y+scale/1.815,x-scale/4.95,y+scale/1.85);
  triangle(x+scale/10,y+scale/1.53,x+scale/100,y+scale/1.815,x+scale/4.95,y+scale/1.85);

  //Mainframe(Derek)
  fill(255, 220, 40)
  noStroke();
  rectMode(CORNER);
  rect(x-scale/5.9-scale/6.4, y-scale/2.8-scale/6.4, scale/6.4+scale/2.95+scale/6.9, scale/3.2*2+scale/2.8)
  stroke(0);
  line(x-scale/5.8-scale/6.4, y-scale/2.8-scale/6.3, x-scale/5.9-scale/6.4, (y-scale/2.8-scale/6.4)+(scale/3.2*2+scale/2.8))
  line((x-scale/5.9-scale/6.4)+(scale/6.4+scale/2.95+scale/6.9), y-scale/2.8-scale/6.4, (x-scale/5.9-scale/6.4)+(scale/6.4+scale/2.95+scale/6.9), (y-scale/2.8-scale/6.4)+(scale/3.2*2+scale/2.8))

  //Ears details(Brady)
  rectMode(CENTER);
  stroke(255,220,40);
  rect(x-scale/3,y+scale/7.5,scale/10.5,scale/13);
  rect(x+scale/3,y+scale/7.5,scale/10.5,scale/13);
  noFill();
  stroke(0);
  curve (x-scale/2, y+scale/4 ,x-scale/2.55,y+scale/9,x-scale/5.85-scale/6.4,y+scale/5.5, x-scale/2.5, y+scale/1.5);
  curve (x+scale/2.5, y+scale/5 ,x+scale/2.8,y+scale/9,x+scale/5.85+scale/7.0,y+scale/5.5, x+scale/2.5, y+scale/1.5);

}

function draweyes(x,y,scale) { //Brady
 //Bart's eyes
 stroke(0);
 ellipseMode(CENTER);

 //eyebrows
 fill(255,220,40);
 ellipse(x-scale/4.5,y-scale/12,scale/4,scale/5);
 stroke(255,220,40);
 ellipse(x-scale/4.8,y-scale/12,scale/4,scale/4.4);

 fill(255,220,40);
 stroke(0);
 ellipse(x+scale/3.9,y-scale/10,scale/6.8);
 stroke(255,220,40);
 ellipse(x+scale/4,y-scale/10,scale/7,scale/6.5);


 //Sclera 2
 stroke(0);
 fill(255);
 ellipse(x+scale/5.9,y,scale/3.2);

 //Pupil 2
 fill(0);
 ellipse(x+scale/5.5,y,scale/35);

 //Sclera 1
 fill(255);
 ellipse(x-scale/5.9,y,scale/3.2);

 //Pupil 1
 fill(0);
 ellipse(x-scale/6.1,y,scale/35);
}


function drawnose(x,y,scale) { //Brady
 //Nose
 ellipseMode(CENTER);
 fill(255,220,40);
 ellipse(x,y+scale/9,scale/7);

 beginShape(TRIANGLES);
 fill(255,220,40);
 noStroke();
 vertex(x-scale/31, y+scale/10);
 vertex(x, y-scale/40);
 vertex(x+scale/31, y+scale/10);
 endShape(TRIANGLES);
}

function drawears(x,y,scale){ //Brady
  ellipseMode(CENTER);
  stroke(0);
  ellipse(x-scale/2.7,y+scale/7.5,scale/9,scale/7.5);
  ellipse(x+scale/2.85,y+scale/7.5,scale/10,scale/8);
}

function drawmouth(x,y,scale){ //Liam
  stroke(0);
  noFill()
  bezier(x-scale/4.3, y+scale/2.15, x-scale/4.7, y+scale/2.5, x+scale/5.2, y+scale/2.1, x+scale/4.3, y+scale/2.25);
  bezier(x-scale/3.7, y+scale/2.1, x-scale/3.8, y+scale/2.1667, x-scale/3.6, y+scale/2.1833, x-scale/4.1, y+scale/2.35)
  bezier(x+scale/3.9, y+scale/2.225, x+scale/4.1, y+scale/2.35, x+scale/3.8, y+scale/2.35, x+scale/4.7, y+scale/2.4)
  }

  function drawhair(x,y,scale){ //Derek
    // draw the hair
    stroke(0);
    triangle(x-scale/5.9-scale/6.4, y-scale/2.8-scale/6.4, x-scale/5.9-scale/8.5, y-scale/2.8-scale/6.4, x-scale/5.9-scale/5.9, y-scale/2.8-scale/4.5)
    triangle(x-scale/5.9-scale/8.5, y-scale/2.8-scale/6.4, (x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/9, y-scale/2.8-scale/6.4, (x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/60, y-scale/2.8-scale/4.2)
    triangle((x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/9, y-scale/2.8-scale/6.4, (x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/4.5, y-scale/2.8-scale/6.4, (x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/7.5, y-scale/2.8-scale/4)
    triangle((x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/4.5, y-scale/2.8-scale/6.4, (x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/3, y-scale/2.8-scale/6.4, (x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/4, y-scale/2.8-scale/3.9)
    triangle((x-scale/5.9-scale/8.5)+(scale/6.4+scale/2.95+scale/6.9)/3, y-scale/2.8-scale/6.4, x-scale/300, y-scale/2.8-scale/6.4, x-scale/25, y-scale/2.8-scale/3.8)
    triangle(x+scale/5.9+scale/6.4-scale/100, y-scale/2.8-scale/6.4, x+scale/5.9+scale/8.5-scale/100, y-scale/2.8-scale/6.4, x+scale/5.9+scale/6-scale/100, y-scale/2.8-scale/4.5)
    triangle(x+scale/5.9+scale/8.5-scale/100, y-scale/2.8-scale/6.4, (x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/9-scale/100, y-scale/2.8-scale/6.4, (x+scale/5.9+scale/8.5)-(scale/6.4-scale/2.95-scale/6.9)/60-scale/100, y-scale/2.8-scale/4.2)
    triangle((x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/9-scale/100, y-scale/2.8-scale/6.4, (x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/4.5-scale/100, y-scale/2.8-scale/6.4, (x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/7.5-scale/100, y-scale/2.8-scale/4)
    triangle((x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/4.5-scale/100, y-scale/2.8-scale/6.4, (x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/3-scale/100, y-scale/2.8-scale/6.4, (x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/4-scale/100, y-scale/2.8-scale/3.9)
    triangle((x+scale/5.9+scale/8.5)-(scale/6.4+scale/2.95+scale/6.9)/3-scale/100, y-scale/2.8-scale/6.4, x-scale/300, y-scale/2.8-scale/6.4, x+scale/25, y-scale/2.8-scale/3.8)
    stroke(255, 220, 40)
    strokeWeight(4);
    line(x-scale/5.9-scale/6.4-scale/4000, y-scale/2.8-scale/6.4, x+scale/5.9+scale/6.4-scale/70, y-scale/2.8-scale/6.4)
    strokeWeight(2);
    stroke(0);
  }
