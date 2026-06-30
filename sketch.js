let RectX = 500;
let rectY = 600;



function setup() {
  createCanvas(4000, 800);
  rectMode(CENTER)
}

function draw() {
  //background(22, 219, 203)
  //background(random(255), random(255)
  background(9, 34, 148);
  stroke(120, 40, 200)
  strokeWeight(10)
line(0, 0, 350, 400)


  noStroke(); 
//ellipse styles
  fill(120)
  ellipse(23, 123, 23)
  ellipse(mouseX, mouseY, 300, 300)
  //rect styles
  if(mouseX > width/2){

  rectX = 200
  rectY = 500 
 } else {
  rectX  = 500;
  rectY = 600;
}

  function draw() 
  {}
  fill(255) 
   rect(rectX, rectY, 150, 300)

 
 //triangle styles
  noFill();
  stroke(81, 219, 22);
  strokeWeight(5);
  triangle(200, 50, 550, 200, 300, 400);


fill(255)
noStroke();
ellipse(300, 100, 200, 100);
fill(0);
ellipse(300, 100, 20, 40);

//eyes
fill(255);
noStroke();
ellipse(600, 100, 200, 100);
fill(0);
ellipse(600, 100, 20, 40);
  }