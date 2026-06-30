let furby 


function preload() {
   furby=loadImage('images/spiderman.jpg')
}


function setup() {
createCanvas(windowWidth, windowHeight) 
imageMode(CENTER)
background(100, 200, 50)
}


function draw(){ 
  

 if(mouseIsPressed = true)  {
   background(0, 0, 233)
   }else{
    background(100, 200, 50)
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


}
