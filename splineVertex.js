let ringInnerRadius, ringWidth;
let radius, dRadius;
let theta, dTheta;
let time, dTime;
let vertexCount, unit, offset;

function setup() {
  createCanvas(400, 400);

  vertexCount = 15;
  unit = createVector(1, 0);
  dTheta = TAU / vertexCount;
  dTime = 0.004;

  ringInnerRadius = 25;
  ringWidth = 5 * ringInnerRadius;

  offset = width;

  describe(
    'A white blob with a black outline changes its shape over time.'
  );
}

function draw() {
  background(220);
  strokeWeight(2);
  translate(width / 2, height / 2);

  time = dTime * frameCount;

  beginShape();
  for (let i = 0; i < vertexCount; i++) {
    unit.rotate(dTheta);
    dRadius = noise(offset + unit.x, offset + unit.y, time) * ringWidth;
    radius = ringInnerRadius + dRadius;
    curveVertex(radius * unit.x, radius * unit.y);
  }
  endShape(CLOSE);
}