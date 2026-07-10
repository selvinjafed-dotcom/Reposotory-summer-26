let tapSound;
let floatingCircles = [];
let showInstructions = false;
let homeScreenBool = true;
let drawingAppBool = false;
let brushType = 'glitch'; 
// Load beach ball image
let imgBeachBall;

let ballSize = 50; // Ball size

// Blob variables
let ringInnerRadius, ringWidth;
let radius, dRadius;
let theta, dTheta;
let time, dTime;
let vertexCount, unit, offset;

let instructionsDiv


function preload() {
  // image
  imgBeachBall = loadImage('images/beachball.png');
  //sound
  tapSound = loadSound('sound/lofibeat.mp3')

}

function setup() {
 
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  noStroke();


  for (let i = 0; i < 20; i++) {
    floatingCircles.push({
      ellipseX: random(windowWidth),
      ellipseY: random(windowHeight),
      size: random(20, 60),
      xSpeed: random(-1.5, 1.5),
      ySpeed: random(-1.5, 1.5)
    });
  }

print(floatingCircles)
  vertexCount = 15;
  unit = createVector(1, 0);
  dTheta = TAU / vertexCount;
  dTime = 0.004;

  ringInnerRadius = 25;
  ringWidth = 5 * ringInnerRadius;

  offset = width;

  instructionsDiv = createDiv('INSTRUCTIONS<br>G - Glitch Brush<br>L - Neon Line<br>B - Sparkle Line<br>P - Beach Ball<br>X - RGB Lines<br>D - Dynamic Brush<br>C Clear / S - Save')
  instructionsDiv.position(20,20)
  instructionsDiv.addClass('instDiv')
  instructionsDiv.hide()
}

function draw() {
  if (homeScreenBool == true) {
    homeScreen();
  }

  if (drawingAppBool == true) {
    drawingApp();
  }
}


function instructionsMenu() {
  push();
  fill(0, 0, 0, 220);
  stroke(255);
  strokeWeight(2);
  rectMode(CORNERS);
  rect(20, 20, 230, 240, 10);


  // Box Text
  noStroke();
  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);
  text("INSTRUCTIONS", 40, 40);

  textSize(15);
  let startX = 40;
  let startY = 40;

  text("G - Glitch Brush", startX, startY);
  text("L - Neon Line", startX, startY + 25);
  text("B - Sparkle Line", startX, startY + 50);
  text("P - Beach Ball", startX, startY + 75);
  text("C - Clear / S - Save", startX, startY + 100);

  pop();
}


function homeScreen() {
  background(0);
  
  //circles
  noStroke();
  fill(255, 255, 255, 50); 
  
  for (let i = 0; i < floatingCircles.length; i++) {
   // print(floatingCircles[i].x)
    
    floatingCircles[i].ellipseX += floatingCircles[i].xSpeed;
    floatingCircles[i].ellipseY += floatingCircles[i].ySpeed;
   
    if (floatingCircles[i].ellipseX < 0 || floatingCircles[i].ellipseX > width) {
      floatingCircles[i].xSpeed *= -1; 
    }
     
     if (floatingCircles[i].ellipseY < 0 || floatingCircles[i].ellipseY > height) {
      floatingCircles[i].ySpeed *= -1; 
    }


    ellipse(floatingCircles[i].ellipseX, floatingCircles[i].ellipseY, floatingCircles[i].size);
  }

  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("PulseArt", width / 2, height / 2 - 30);

  textSize(20);
  text('Press Enter to Start', width / 2, height / 2 + 30);
} 


function drawingApp() {
  strokeWeight(2);

  push();
  translate(width / 2, height / 2);

  time = dTime * frameCount;

  beginShape();
  fill(255, 0, 0);
  for (let i = 0; i < vertexCount; i++) {
    unit.rotate(dTheta);
    dRadius = noise(offset + unit.x, offset + unit.y, time) * ringWidth;
    radius = ringInnerRadius + dRadius;
    curveVertex(radius * unit.x, radius * unit.y);
  }
  endShape(CLOSE);

  pop();
  
  // --- BRUSHES ---
  if (mouseIsPressed && !showInstructions) {
    let mirrorX = width - mouseX;

    // BRUSH 1:  (Key 'G')
    if (brushType === 'glitch') {
      noStroke();
      fill(255, 0, 150);
      rect(mouseX + random(-15, 15), mouseY + random(-5, 5), 15, 4);
      rect(mirrorX + random(-15, 15), mouseY + random(-5, 5), 15, 4);

      fill(0, 255, 255);
      rect(mouseX + random(-15, 15), mouseY + random(-5, 5), 15, 4);
      rect(mirrorX + random(-15, 15), mouseY + random(-5, 5), 15, 4);

      fill(255);
      rect(mouseX - 20, mouseY + random(-10, 10), 40, 2);
      rect(mirrorX - 20, mouseY + random(-10, 10), 40, 2);
    }

    // BRUSH 2: NEON LINE (Key 'L')
    if (brushType === 'line') {
      stroke(random(255), random(255), random(255));
      strokeWeight(5);
      line(pmouseX, pmouseY, mouseX, mouseY);
      noStroke();
    }

    // BRUSH 3: SPARKLE LINE (Key 'B')
    if (brushType === 'sparkle') {
      stroke(255, 255, 200);
      strokeWeight(3);
      line(pmouseX, pmouseY, mouseX, mouseY);

      noStroke();
      fill(255, 255, 255, random(100, 255));
      ellipse(mouseX + random(-15, 15), mouseY + random(-15, 15), random(3, 8), random(3, 8));

      fill(255, 230, 100, random(100, 255));
      ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), random(3, 8), random(3, 8));
    }

    // BRUSH 4: BEACH BALL (Key 'P')
    if (brushType === 'ball') {
      image(imgBeachBall, mouseX, mouseY, ballSize, ballSize);
    }
     if (brushType === 'rgbLines') {
      strokeWeight(4);
      stroke(255, 0, 0); line(pmouseX - 5, pmouseY - 5, mouseX - 5, mouseY - 5);
      stroke(0, 255, 0); line(pmouseX, pmouseY, mouseX, mouseY);
      stroke(0, 0, 255); line(pmouseX + 5, pmouseY + 5, mouseX + 5, mouseY + 5);
      noStroke();
    }

    //BRUSH 5: Dynamic Brush (Key 'D')
    if (brushType === 'dynamic') {
      // 1. Calculate speed 
      let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
      
      // 2.
      let brushSize = constrain(speed, 2, 25);
      
      // 3. Draw the line
      stroke(255);            // White ink 
      strokeWeight(brushSize);
      line(pmouseX, pmouseY, mouseX, mouseY);
      
      // 4. Reset stroke 
      noStroke();             
    }

   

  }

  // Display instructions modal
  if (showInstructions) {
    instructionsDiv.show()
  }else{
    instructionsDiv.hide()
  }
}

// Mouse Clicks
function mousePressed() {
  tapSound.play();
}

// Key Functions
function keyPressed() {
  // Start app
  if (key === 'Enter') {
    homeScreenBool = false;
    drawingAppBool = true;
    background(0);
  }

  // Beach Ball brush
  if (key === 'p' || key === 'P') {
    brushType = 'ball';
  }

  // Glitch brush
  if (key === 'g' || key === 'G') {
    brushType = 'glitch';
  }

  // Line brush
  if (key === 'l' || key === 'L') {
    brushType = 'line';
  }

  // Sparkle brush
  if (key === 'b' || key === 'B') {
    brushType = 'sparkle';
  }

  // C to clear screen
  if (key === 'c' || key === 'C') {
    background(0);
  }

  // S to save image
  if (key === 's' || key === 'S') {
    save('myCanvas.jpg');
  }

  // I to toggle instructions menu
  if (key === 'h' || key === 'H' || key.toLowerCase() === 'h') {
    showInstructions = !showInstructions;
  }

  if (key === 'x' || key === 'X') {
   brushType = 'rgbLines';

  }
  if (key === 'd' || key === 'D') {
    brushType = 'dynamic';
  }
 
}