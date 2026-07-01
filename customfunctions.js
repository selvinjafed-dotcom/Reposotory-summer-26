
let lineBrushtool = false
let ellipseBrushtool = false


function setup () { 
	createCanvas(windowWidth, windowHeight)
	background(255)


}


function draw () {

//fill (random (255),  random (255), ramdom (255)

//textSize(20)
//smoooth()
//text


	if(lineBrushtool == true){

		lineBrush();
	}

	if(ellipseBrushtool == true){
		ellipseBrush()
	}

}

function lineBrush(){

	stroke (random (255),  random (255), random (255) )
	strokeWeight(15)


	if (mouseIsPressed) {
		line (pmouseX, pmouseY, mouseX, mouseY)

	}



}


function ellipseBrush(){

	//background(255, 0 , 0)

	if (mouseIsPressed) {
		fill (random (255),  random (255), random (255) )
		ellipse(mouseX,mouseY, 20 , 20)

	}

}


function keyPressed(){
	if(key=== 'l'){
		lineBrushtool=true

		ellipseBrushtool= false
	}


	if (key==='e') {
		lineBrushtool=false

		ellipseBrushtool= true

	}


	if (key==='o') {

		lineBrushtool=false

		ellipseBrushtool= false
	}


	if (key==='c') {
		lineBrushtool=false

		ellipseBrushtool= false
		background(255)
	}

	if (key==='s') {


		lineBrushtool=false

		ellipseBrushtool= false
		save('mydrawing.jpg')
	}

}