/*
Snowman Assignment
Created by Derek Youngman
March 18, 2019
*/function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}

function draw() {
  // put drawing code here
  // base;
  ellipse(200, 293, 140, 140);

  // middle;
  ellipse(200, 200, 100, 100);

  // top;
  ellipse(200, 136, 75, 75);

  // ground;
  rectMode(CENTER);
  rect(200, 389, 390, 50);

  // arms;
  line(250, 200, 300, 175);
  line(150, 200, 100, 175);
}
