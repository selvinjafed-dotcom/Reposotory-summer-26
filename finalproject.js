let xPos, yPos;
let xSpeed = 3;
let ySpeed = 3;

let rectWidth = 100;
let rectHeight = 100;
let glitchIntensity = 0;

let mouseDist;
let startBool = true;
let winBool = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    xPos = windowWidth / 2;
    yPos = windowHeight / 2;
    background(10); 
}

function draw() {
    if (startBool == true) {
        generateGlitchArt();
    }
    if (winBool == true) {
        artCompleteScreen();
    }
}

function generateGlitchArt() {
    background(10, 10, 10, 15); 

    fill(255);
    textSize(20);
    textFont('Courier New');
    text("GLITCH INTENSITY: " + glitchIntensity + "%", 30, 50);

    noStroke();
    fill(xPos % 255, yPos % 255, random(100, 255), 180); 
    rect(xPos, yPos, rectWidth + random(-10, 10), rectHeight + random(-10, 10));

    mouseDist = dist(mouseX, mouseY, xPos, yPos);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    if (xPos >= windowWidth - 50 || xPos <= 50) {
        xSpeed = xSpeed * -1;
    }
    if (yPos >= windowHeight - 50 || yPos <= 50) {
        ySpeed = ySpeed * -1;
    }

    if (mouseDist < 60) {
        glitchIntensity += 5; 
        
        xPos = random(100, windowWidth - 100);
        yPos = random(100, windowHeight - 100);
        
        xSpeed = xSpeed * 1.2;
        ySpeed = ySpeed * 1.2;

        rectWidth = random(40, 200);
        rectHeight = random(40, 200);

        stroke(255, random(100));
        strokeWeight(random(1, 5));
        line(0, random(windowHeight), windowWidth, random(windowHeight));
    }

    if (glitchIntensity >= 100) {
        winBool = true;
        startBool = false;
    }
}

function artCompleteScreen() { 
    fill(255);
    noStroke();
    textSize(35);
    textFont('Courier New');
    textAlign(CENTER);
    text('DIGITAL COMPOSITION COMPLETE', windowWidth / 2, windowHeight / 2);
    textSize(18);
    text('Press R to reset the canvas', windowWidth / 2, (windowHeight / 2) + 50);
}

function keyPressed() {
    if ((key == 'r' || key == 'R') && winBool == true) {
        glitchIntensity = 0;
        xSpeed = 3;
        ySpeed = 3;
        startBool = true;
        winBool = false;
        background(10);
    }
}