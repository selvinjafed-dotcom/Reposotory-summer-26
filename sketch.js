let imgumbrella;

let imgbeachball;

function preload() {

imgumbrella=loadImage('images/umbrella.png');
imgbeachball =loadImage('images/beachball.png');



}


function setup () {

createCanvas (400,400);

}

function draw() {
 background(135,206,235);
 
//sun
 fill(255, 240, 0);
 noStroke();
ellipse(320, 80, 60, 60);


//cloud
fill(255);
noStroke();
rect(190, 80, 100, 60, 20);

//sea
fill(0, 105, 148);
noStroke();
rect(0,200, 400, 100);

//sand
fill(194, 178, 128);
noStroke();
rect(0, 300, 400, 100);


//Tree
fill(139, 69, 19);
rect(52, 240, 15, 70);

fill(34, 139, 34);
noStroke();
ellipse(60, 240, 50, 60);

image(imgumbrella, 230, 210, 120, 120);
image(imgbeachball, 200, 310, 35, 35);
image(imgbeachball, 110, 320, 45, 45);
image(imgbeachball, 20, 340, 55, 55);


}