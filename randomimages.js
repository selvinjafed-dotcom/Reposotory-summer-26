let canvas

let randomButtom
let randomText
let textArray = ['dog', 'cat', 'Alligator']

let imgs = []

let myImages = ['0.jpg', '1.jpg', '2.jpg', 'tiger.png']

function preload(){

 for(i = 0, i < 3; i + ){
   imgs[1] = loadImage ('images/' + i + '.jpg')

 }
  
  print(imgs)


}

function setup(){
   canvas = createCanvas (windowWidth,windowHeight)
   canvas.position( 0, 0)
   canvas.style( 'z-index, ', '-1')

   randomButtom = createButton ('Random Image and Text')
   randomButtom.mousePressed (randomImageText)
   randomButtom.position()





}

function randomImageText(){
  randomText = int(random(textArray.length))
  randomImage = int( imgs.length)

}

function draw() {

   background(255)

   textSize(300)

   text (textArray[randomText], 400, 300)
   ellipse(mouseX, mouseY, 30, 30)
  

}