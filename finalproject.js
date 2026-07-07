let canvas;
let gameState = 0; 

let xPos1, yPos1, xSpeed1, ySpeed1;
let xPos2, yPos2, xSpeed2, ySpeed2;
let rectWidth = 80;
let rectHeight = 80;

let score = 0;

let playButton;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); 

    playButton = createButton('START EXPLORER');
    playButton.position(windowWidth / 2 - 75, windowHeight / 2);
    playButton.style('padding', '10px 20px');
    playButton.style('font-family', 'Courier New');
    playButton.mousePressed(startGame);

    xPos1 = random(50, windowWidth / 2 - 100);
    yPos1 = random(50, windowHeight - 150);
    xSpeed1 = 4;
    ySpeed1 = 4;

    xPos2 = random(windowWidth / 2 + 50, windowWidth - 150);
    yPos2 = random(50, windowHeight - 150);
    xSpeed2 = -4;
    ySpeed2 = 3;
}

function startGame() {
    gameState = 1;
    playButton.hide();
    background(10);
}

function draw() {
    if (gameState === 0) {
        background(15);
        fill(255);
        textFont('Courier New');
        textAlign(CENTER, CENTER);
        textSize(40);
        text('GLITCH CANVAS EXPLORER', windowWidth / 2, windowHeight / 2 - 80);
        playButton.show();
    } else if (gameState === 1) {
        background(10, 10, 10, 20);

        noStroke();
        fill(255);
        textSize(20);
        textAlign(LEFT);
        text("SCORE: " + score, 30, 40);

        fill(100, 150, 255, 200);
        rect(xPos1, yPos1, rectWidth, rectHeight);
        xPos1 += xSpeed1;
        yPos1 += ySpeed1;
        if (xPos1 >= windowWidth - rectWidth || xPos1 <= 0) xSpeed1 *= -1;
        if (yPos1 >= windowHeight - rectHeight || yPos1 <= 0) ySpeed1 *= -1;

        fill(255, 100, 150, 200);
        rect(xPos2, yPos2, rectWidth, rectHeight);
        xPos2 += xSpeed2;
        yPos2 += ySpeed2;
        if (xPos2 >= windowWidth - rectWidth || xPos2 <= 0) xSpeed2 *= -1;
        if (yPos2 >= windowHeight - rectHeight || yPos2 <= 0) ySpeed2 *= -1;
    }
}

function mousePressed() {
    if (gameState === 1) {
        let d1 = dist(mouseX, mouseY, xPos1 + rectWidth/2, yPos1 + rectHeight/2);
        if (d1 < 50) {
            score += 10;
            xPos1 = random(50, windowWidth - 100);
            yPos1 = random(50, windowHeight - 100);
        }

        let d2 = dist(mouseX, mouseY, xPos2 + rectWidth/2, yPos2 + rectHeight/2);
        if (d2 < 50) {
            score += 10;
            xPos2 = random(50, windowWidth - 100);
            yPos2 = random(50, windowHeight - 100);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}