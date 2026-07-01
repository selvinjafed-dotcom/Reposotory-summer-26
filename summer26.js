let furby 


function preload() {
   furby=loadImage('images/spiderman.jpg')
}


function setup() {
createCanvas(windowWidth, windowHeight) 

}


function draw(){ 
  

 if(mouseIsPressed = true)  {
 //  background(0, 0, 233)
  // }else{
   // background(100, 200, 50)

  for (let i = 0; i<100; i++){
image (furby, random( windowWidth), random(windowHeight))


fill(0)
textSize(30)
text('hello')


  }
}

textSize(60)

if(mouseIsPressed==true) {
 background (0, 0, 255)
background(10,100,50) 
}
 //if(mouseisPressed = true){
 //background(0, 0, 233)
//}else{
 // background(100, 200, 50)
//}

image(furby, mouseX, mouseY, 100, 100)
 
 noStroke()
 fill(0,0,255,100)
 ellipse(mouseX,mouseY, 100, 100)

}
