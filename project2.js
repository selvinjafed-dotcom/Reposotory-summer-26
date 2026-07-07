let canvas;
let gameState = 0; 
let currentLevel = 1;
let maxLevels = 5;

let xPositions = [];
let yPositions = [];
let xSpeeds = [];
let ySpeeds = [];
let shapes = [];
let hits = [];

let rectWidth = 90;
let rectHeight = 90;
let baseShapesCount = 2;

let score = 0;
let targetScore = 50; 
let timer;
let timeLimit; 

let playButton;
let volSlider;
let rateSlider;

let musicaFondo;
let catMeme;

function preload() {
    catMeme = loadImage('images/catmeme.png'); 
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); 

    playButton = createButton('START EXPLORER');
    playButton.position(windowWidth / 2 - 75, windowHeight / 2 + 50);
    playButton.style('padding', '10px 20px');
    playButton.style('font-family', 'Courier New');
    playButton.mousePressed(startGame);

    volSlider = createSlider(0, 1, 0.5, 0.05);
    volSlider.position(windowWidth / 2 - 60, windowHeight / 2 + 150);
    
    rateSlider = createSlider(0.5, 2, 1, 0.05);
    rateSlider.position(windowWidth / 2 - 60, windowHeight / 2 + 200);

    initLevelValues();
}

function startGame() {
    gameState = 1;
    playButton.hide();
    volSlider.hide();
    rateSlider.hide();
    background(10);
}

function initLevelValues() {
    score = 0;

    if (currentLevel === 1) {
        baseShapesCount = 2;
        targetScore = 40;
        timeLimit = 50; 
    } else if (currentLevel === 2) {
        baseShapesCount = 4;
        targetScore = 60;
        timeLimit = 45; 
    } else if (currentLevel === 3) {
        baseShapesCount = 6;
        targetScore = 80;
        timeLimit = 40; 
    } else if (currentLevel === 4) {
        baseShapesCount = 8;
        targetScore = 110;
        timeLimit = 35; 
    } else if (currentLevel === 5) {
        baseShapesCount = 10;
        targetScore = 140;
        timeLimit = 30; 
    }
    
    timer = timeLimit;
    resetTargetGroup();
}

function resetTargetGroup() {
    xPositions = [];
    yPositions = [];
    xSpeeds = [];
    ySpeeds = [];
    shapes = [];
    hits = [];

    let chosenShapeGroup = int(random(0, 5));
    rectWidth = random(55, 95);
    rectHeight = random(55, 95);

    let speedMultiplier = 3 + currentLevel * 1.5;

    for (let i = 0; i < baseShapesCount; i++) {
        xPositions.push(random(100, windowWidth - 150));
        yPositions.push(random(100, windowHeight - 150));
        
        let sx = random(-speedMultiplier, speedMultiplier);
        let sy = random(-speedMultiplier, speedMultiplier);
        if (abs(sx) < 1) sx = sx > 0 ? 2 : -2;
        if (abs(sy) < 1) sy = sy > 0 ? 2 : -2;
        
        xSpeeds.push(sx);
        ySpeeds.push(sy);
        shapes.push(chosenShapeGroup);
        hits.push(false);
    }
}

function draw() {
    if (musicaFondo && musicaFondo.isPlaying()) {
        musicaFondo.setVolume(volSlider.value());
        musicaFondo.rate(rateSlider.value());
    }

    if (gameState === 0) {
        drawHomeScreen();
    } else if (gameState === 1) {
        drawGameScreen();
    } else if (gameState === 2) {
        drawLoseScreen();
    } else if (gameState === 3) {
        drawWinScreen();
    }
}

function drawHomeScreen() {
    background(15);
    fill(255);
    textFont('Courier New');
    textAlign(CENTER, CENTER);
    
    textSize(45);
    text('GLITCH CANVAS EXPLORER', windowWidth / 2, windowHeight / 2 - 100);
    
    textSize(16);
    text('Volume Control', windowWidth / 2, windowHeight / 2 + 135);
    text('Speed Rate', windowWidth / 2, windowHeight / 2 + 185);

    playButton.show();
    volSlider.show();
    rateSlider.show();
}

function drawShape(type, x, y, w, h) {
    if (type === 0) {
        rect(x, y, w, h);
    } else if (type === 1) {
        triangle(x + w / 2, y, x, y + h, x + w, y + h);
    } else if (type === 2) {
        push();
        translate(x + w / 2, y + h / 4);
        beginShape();
        vertex(0, 0);
        bezierVertex(-w / 2, -h / 2, -w, h / 3, 0, h * 0.75);
        bezierVertex(w, h / 3, w / 2, -h / 2, 0, 0);
        endShape(CLOSE);
        pop();
    } else if (type === 3) {
        ellipse(x + w / 2, y + h / 2, w, h);
    } else if (type === 4) {
        push();
        translate(x + w / 2, y + h / 2);
        beginShape();
        for (let i = 0; i < 5; i++) {
            let angleA = TWO_PI / 5 * i - HALF_PI;
            let xA = cos(angleA) * (w / 2);
            let yA = sin(angleA) * (h / 2);
            vertex(xA, yA);
            let angleB = TWO_PI / 5 * i + TWO_PI / 10 - HALF_PI;
            let xB = cos(angleB) * (w / 4);
            let yB = sin(angleB) * (h / 4);
            vertex(xB, yB);
        }
        endShape(CLOSE);
        pop();
    }
}

function drawGameScreen() {
    background(10, 10, 10, 15);

    if (frameCount % 60 === 0 && timer > 0) {
        timer--;
    }

    if (timer <= 0) {
        gameState = 2; 
    }

    noStroke();
    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("LEVEL: " + currentLevel + " / " + maxLevels, 30, 40);
    text("SCORE: " + score + " / " + targetScore, 30, 70);
    
    if (timer < 5) fill(255, 0, 0);
    text("TIME LEFT: " + timer + "s", 30, 100);

    let dynamicWidth = rectWidth + random(-4, 4);
    let dynamicHeight = rectHeight + random(-4, 4);
    let allCleared = true;

    for (let i = 0; i < baseShapesCount; i++) {
        if (!hits[i]) {
            allCleared = false;

            fill((xPositions[i] + i * 30) % 255, (yPositions[i] + i * 50) % 255, random(150, 255), 180);
            drawShape(shapes[i], xPositions[i], yPositions[i], dynamicWidth, dynamicHeight);

            xPositions[i] += xSpeeds[i];
            yPositions[i] += ySpeeds[i];

            if (xPositions[i] >= windowWidth - rectWidth || xPositions[i] <= 0) xSpeeds[i] *= -1;
            if (yPositions[i] >= windowHeight - rectHeight || yPositions[i] <= 0) ySpeeds[i] *= -1;
        }
    }

    if (allCleared) {
        resetTargetGroup();
        background(0, 120, 50, 30);
    }

    if (score >= targetScore) {
        if (currentLevel < maxLevels) {
            currentLevel++;
            initLevelValues();
            background(10); 
        } else {
            gameState = 3; 
        }
    }
}

function mousePressed() {
    if (gameState === 1) {
        for (let i = 0; i < baseShapesCount; i++) {
            if (!hits[i]) {
                let d = dist(mouseX, mouseY, xPositions[i] + rectWidth / 2, yPositions[i] + rectHeight / 2);
                if (d < 55) {
                    hits[i] = true;
                    score += 10;
                    background(0, i * 20 + 20, 0, 40);
                    break; 
                }
            }
        }
    }
}

function drawLoseScreen() {
    background(0);
    
    imageMode(CENTER);
    image(catMeme, windowWidth / 2, windowHeight / 2, 480, 360);
    
    fill(255, 0, 0);
    textFont('Courier New');
    textAlign(CENTER, CENTER);
    textSize(50);
    text('YOU LOSE...', windowWidth / 2, windowHeight / 2 - 210);
    
    fill(255);
    textSize(20);
    text('The system is laughing at you.', windowWidth / 2, windowHeight / 2 + 210);
    textSize(15);
    text('Press "R" to reset and try again from Level 1', windowWidth / 2, windowHeight / 2 + 250);
}

function drawWinScreen() {
    background(10);
    fill(0, 255, 150);
    textFont('Courier New');
    textAlign(CENTER, CENTER);
    
    textSize(40);
    text('DIGITAL COMPOSITION COMPLETE', windowWidth / 2, windowHeight / 2 - 30);
    
    fill(255);
    textSize(18);
    text('You successfully broke the matrix across all levels.', windowWidth / 2, windowHeight / 2 + 30);
    textSize(15);
    text('Press "R" to reset and return to Home', windowWidth / 2, windowHeight / 2 + 80);
}

function keyPressed() {
    if (key === 'r' || key === 'R') {
        if (gameState === 2 || gameState === 3) {
            currentLevel = 1;
            initLevelValues();
            gameState = 0; 
            background(10);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}