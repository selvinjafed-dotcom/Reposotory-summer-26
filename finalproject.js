let currentTool = "PAINT"; // Active tool
let currentColor;
let showHelp = false; // Controls instruction window
let showHome = true;  // Controls home page

let startX, startY;
let shapesList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentColor = color(0, 255, 200); // Initial color (Cyan)
}

function draw() {
  if (showHome) {
    drawHomeScreen();
  } else {
    drawCanvasScreen();
  }
}

// 1. HOME PAGE SCREEN (Simple Floating Background)
function drawHomeScreen() {
  background(15, 15, 20);
  noStroke();
  
  // Movimiento súper simple usando frameCount
  fill(0, 150, 255, 40);
  ellipse(width * 0.2, (height * 0.7) + sin(frameCount * 0.02) * 30, 300);
  
  fill(255, 0, 120, 35);
  ellipse((width * 0.7) + cos(frameCount * 0.02) * 30, height * 0.3, 350);
  
  fill(200, 255, 0, 30);
  ellipse(width * 0.8, (height * 0.8) + sin(frameCount * 0.03) * 20, 250);
  
  fill(150, 0, 255, 40);
  ellipse(width * 0.3, (height * 0.2) + cos(frameCount * 0.02) * 25, 280);

  // Title Text
  noStroke();
  fill(0, 255, 200);
  textSize(50);
  textFont('Courier New');
  textAlign(CENTER, CENTER);
  text("LET'S PAINT", width / 2, height / 2 - 30);

  fill(255);
  textSize(16);
  text("Press ANY KEY or CLICK to Start", width / 2, height / 2 + 40);
}

// 2. MAIN DRAWING CANVAS (Pure Dark Background)
function drawCanvasScreen() {
  background(20); // Borra todo para dejar el lienzo limpio
  textAlign(LEFT, BASELINE);

  // Draw saved shapes
  for (let i = 0; i < shapesList.length; i++) {
    let s = shapesList[i];
    
    fill(s.c);
    stroke(255);
    strokeWeight(1.5);

    // Simple glitch jitter
    let gx = s.x + random(-2, 2);
    let gy = s.y + random(-2, 2);

    if (s.type === "SQUARE") {
      rect(gx, gy, s.size, s.size);
    } else if (s.type === "CIRCLE") {
      ellipse(gx + s.size / 2, gy + s.size / 2, s.size);
    } else if (s.type === "RECTANGLE") {
      rect(gx, gy, s.size, s.size / 2);
    } else if (s.type === "LINE") {
      stroke(s.c);
      strokeWeight(3);
      line(s.x, s.y, s.x2, s.y2);
    }
  }

  // Free paint brush with mouse
  if (mouseIsPressed && currentTool === "PAINT" && !showHelp) {
    shapesList.push({
      type: "LINE",
      x: pmouseX,
      y: pmouseY,
      x2: mouseX,
      y2: mouseY,
      c: currentColor
    });
  }

  // Simple HUD UI
  noStroke();
  fill(255);
  textSize(16);
  textFont('Courier New');
  text("TOOL: " + currentTool, 20, 30);
  
  fill(currentColor);
  rect(20, 45, 15, 15);
  fill(255);
  text("COLOR [B]", 45, 58);

  fill(180);
  textSize(13);
  text("Press [W] for Instructions", 20, height - 25);

  // Instruction Window
  if (showHelp) {
    drawInstructions();
  }
}

// INSTRUCTIONS WINDOW
function drawInstructions() {
  textAlign(LEFT, BASELINE);
  fill(10, 10, 15, 230);
  stroke(0, 255, 200);
  strokeWeight(2);
  rect(50, 50, 320, 290);

  noStroke();
  fill(0, 255, 200);
  textSize(18);
  text("--- INSTRUCTIONS ---", 70, 85);

  fill(255);
  textSize(14);
  text("D : Square Tool", 70, 120);
  text("G : Circle Tool", 70, 145);
  text("H : Rectangle Tool", 70, 170);
  text("L : Free Paint Brush", 70, 195);
  text("B : Change Color", 70, 220);
  text("S : Save PNG Artwork", 70, 245);
  text("W : Toggle Help Menu", 70, 270);

  fill(255, 0, 100);
  text("Click & drag to draw shapes!", 70, 310);
}

// MOUSE EVENTS
function mousePressed() {
  if (showHome) {
    showHome = false;
    return;
  }
  startX = mouseX;
  startY = mouseY;
}

function mouseReleased() {
  if (showHome || currentTool === "PAINT" || showHelp) return;

  let d = dist(startX, startY, mouseX, mouseY);
  if (d > 15) {
    shapesList.push({
      type: currentTool,
      x: min(startX, mouseX),
      y: min(startY, mouseY),
      size: d,
      c: currentColor
    });
  }
}

// KEYBOARD EVENTS
function keyPressed() {
  if (showHome) {
    showHome = false;
    return;
  }

  let k = key.toUpperCase();

  if (k === 'D') currentTool = "SQUARE";
  if (k === 'G') currentTool = "CIRCLE";
  if (k === 'H') currentTool = "RECTANGLE";
  if (k === 'L') currentTool = "PAINT";
  
  if (k === 'B') {
    currentColor = color(random(255), random(255), random(255));
  }
  if (k === 'S') {
    saveCanvas('my_artwork', 'png');
  }
  if (k === 'W') {
    showHelp = !showHelp;
  }
}