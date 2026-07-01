let imgUmbrella;
let imgBeachBall;

function preload() {
    imgUmbrella = loadImage('images/umbrella.png');
    imgBeachBall = loadImage('images/beachball.png');
}

function setup() {
    createCanvas(800, 600); 
}

function draw() {
    background(135, 206, 235);
    
    fill(255, 240, 0);
    noStroke();
    ellipse(650, 120, 120, 120);
    
    fill(255);
    noStroke();
    rect(350, 100, 250, 50, 40);
    
    fill(0, 105, 148);
    noStroke();
    rect(0, 280, 800, 140);
    
    fill(194, 178, 128);
    noStroke();
    rect(0, 420, 800, 180);
    
    fill(139, 69, 19);
    rect(120, 320, 30, 140); 
    
    fill(34, 139, 34);
    noStroke();
    ellipse(135, 320, 120, 120); 
    
    image(imgUmbrella, 450, 260, 240, 240);
    
    image(imgBeachBall, 400, 460, 70, 70);
    image(imgBeachBall, 250, 490, 85, 85);
    image(imgBeachBall, 50, 480, 100, 100);
}