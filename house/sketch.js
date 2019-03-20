/*
House Assignment
Created by Derek Youngman
March 18, 2019
*/

function setup() {
  // canvas
  createCanvas(1280, 880);
}

function draw() {
  // variables
  let width = 750; // change width to change size of house
  let height = width/8*4.5;
  let x = 625-width/2;
  let y = 795-height;
  let windowx = width/9;
  let windowy = height/3.8;
  let windowsize = width/14;
  // sky
  background(135,206,250);
  // base
  stroke(0, 0, 0);
  fill(240, 240, 240);
  rect(x, y, width, height);
  // roof
  fill(200,200,200);
  triangle(x,y,x+width,y,x+width/2,y-(height/1.5));
  // door
  fill(100, 100, 100);
  rectMode(CENTER);
  rect(x+width/2, y+height-height/6, width/8, height/3);
  fill(255, 255, 255);
  ellipseMode(CENTER);
  ellipse((x+width/2)+0.35*(width/8), y+height-height/6, height/50, height/50);
  // window #1
  fill(255, 255, 255);
  rectMode(CORNER);
  rect(x+windowx, y+windowy, windowsize, windowsize);
  rect(x+windowx+windowsize, y+windowy, windowsize, windowsize);
  rect(x+windowx, y+windowy+windowsize, windowsize, windowsize);
  rect(x+windowx+windowsize, y+windowy+windowsize, windowsize, windowsize);
  // window #2
  rect(x+width-windowx-windowsize*2, y+windowy, windowsize, windowsize);
  rect(x+width-windowx-windowsize, y+windowy, windowsize, windowsize);
  rect(x+width-windowx-windowsize*2, y+windowy+windowsize, windowsize, windowsize);
  rect(x+width-windowx-windowsize, y+windowy+windowsize, windowsize, windowsize);
  // ground
  stroke(0, 150, 0);
  fill(0, 150, 0);
  rect(0, 795, 2000, 18900);
  // sun
  fill(238, 232, 0);
  stroke(238, 232, 0);
  ellipse(0, 0, 300, 300);
}
