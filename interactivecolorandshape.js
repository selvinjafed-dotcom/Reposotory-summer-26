let lineBrushtool = false;
let ellipseBrushtool = false;
let showBeachBall = false;
let imgBeachBall;

function preload() {
  imgBeachBall = loadImage('images/beachball.png');
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  push();
  noStroke();
  fill(255);
  rect(15, 15, 180, 130);
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Controls:\nL - Line Brush\nE - Ellipse Brush\nB - Ball\nO - Off\nC - Clear\nS - Save", 20, 20);
  pop();

  if (showBeachBall && imgBeachBall) {
    image(imgBeachBall, 400, 460, 70, 70);
  }

  if (lineBrushtool == true) {
    lineBrush();
  }

  if (ellipseBrushtool == true) {
    ellipseBrush();
  }
}

function lineBrush() {
  stroke(random(255), random(255), random(255));
  strokeWeight(15);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function ellipseBrush() {
  noStroke(); 
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function keyPressed() {
  if (key === 'l' || key === 'L') {
    lineBrushtool = true;
    ellipseBrushtool = false;
  }

  if (key === 'e' || key === 'E') {
    lineBrushtool = false;
    ellipseBrushtool = true;
  }

  if (key === 'b' || key === 'B') {
    showBeachBall = true;
  }

  if (key === 'o' || key === 'O') {
    lineBrushtool = false;
    ellipseBrushtool = false;
  }

  if (key === 'c' || key === 'C') {
    lineBrushtool = false;
    ellipseBrushtool = false;
    showBeachBall = false;
    background(255);
  }

  if (key === 's' || key === 'S') {
    lineBrushtool = false;
    ellipseBrushtool = false;
    save('mydrawing.jpg');
  }
}