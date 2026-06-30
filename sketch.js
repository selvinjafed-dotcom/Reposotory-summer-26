function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235);

  // Sun
  fill(255, 215, 0);
  noStroke();
  ellipse(320, 80, 60, 60);

  // Cloud
  fill(255);
  noStroke();
  ellipse(190, 80, 100, 60);


  // Sea
  fill(0, 105, 148);
  noStroke();
  rect(0, 200, 400, 100);

  // Sand
  fill(194, 178, 128);
  noStroke();
  rect(0, 300, 400, 100);

  // Palm Tree Trunk
  fill(139, 69, 19);
  rect(52, 240, 15, 70);

  // Circular Leaves
  fill(34, 139, 34);
  noStroke();
  ellipse(60, 240, 50, 50);
}