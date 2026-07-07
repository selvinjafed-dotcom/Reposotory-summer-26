

let capture

function setup(){
createCanvas(windowWidth, windowHeight)

capture = createCapture(VIDEO)
capture.size( 640,480 )
capture.hide()
imageMode(CENTER)
}


function draw(){
	background(0)
	image(capture,  windowWidth/2, windowHeight/2 )
	filter(DILATE)
}