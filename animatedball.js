let xPos
let yPos


let xSpeed=2
let ySpeed=2

let ballDiameter = 50

function setup() {
createCanvas(windowWidth, windowHeight)

xPos = windowWidth/2
yPos = windowHeight/2

}


function draw(){

background(27, 194, 227)



fill(20)
textSize(200)
text('hello')

//ball styling
fill(111, 201, 60)
ellipse(xPos,yPos, ballDiameter, ballDiameter)

//move the ball
xPos= xPos+xSpeed
yPos= yPos+ySpeed

if (xPos) {


}

if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter/2){
		xSpeed = xSpeed * -1
}

if(yPos >= windowHeight - ballDiameter/2 || yPos <= ballDiameter/2){
		ySpeed = ySpeed * -1
}


}
