let xPos;
let yPos;

let xSpeed = 2;
let ySpeed = 2;



let imgBeachBall;


let score = 0

let mouseDist

let startBool = true
let winBool = false

function preload() {
    imgBeachBall = loadImage('images/beachball.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    xPos = windowWidth / 2;
    yPos = windowHeight / 2;
    imageMode(CENTER);
}

function draw() {
 if(startBool==true){
 starGame()

 }
  if(winBool==true){
  winGame()
}
    
}

function starGame () {

background(0, 0,0);
    
    fill(255);
    textSize(30);
    text(" Tag to the beachball! Your score is " + score + 'points', 20, 100);
    image(imgBeachBall, xPos, yPos, 30, 30);

   //calculating the distance between mouse and beachball 
    mouseDist = dist(mouseX, mouseY, xPos, yPos)

    print(mouseDist)

    //animating beachball 
 //move the beachball
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

//reverse the direction of the beachball when it hits an edge 
    if (xPos >= windowWidth - 15 || xPos <= 15) {
        xSpeed = xSpeed * -1;
    }

    if (yPos >= windowHeight - 15 || yPos <= 15) {
        ySpeed = ySpeed * -1;
    }
     

      // game mechanics... check and see if we've tagged the beachball, if so do stuff
    if(mouseDist < 15){
       score ++
       xPos = random (16, windowWidth - 16)
       yPos = random (16, windowHeight - 16)
       
       xSpeed = xSpeed * 1.1;
        ySpeed = ySpeed * 1.1;


    }

    //checking the score, if it reaches a certain value, tigger the win screen
    if(score == 20){
      winBool = true
      startBool = false

    }
}
function winGame(){ 
  background(0, 0, 255)
   fill(255)
   textSize(40)
   text('You Win!!', windowWidth/2, 50)
}