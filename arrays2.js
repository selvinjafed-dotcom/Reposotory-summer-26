let imgBeachBall

let imgBeachBallX= []
let imgBeachBallY= []

function preload() {

 imgBeachBall = loadImage( 'images/beachball.png')	
}


function setup(){
createCanvas(windowWidth, windowHeight)
imageMode( CENTER)

 for (let i = 0; i < 10; i++){
   imgBeachBallX.push(random (30, windowWidth -30))
   imgBeachBallY.push(random (30, windowWidth -30))



 }
  


}


function draw() {
background(150, 40, 100)


 for(let i = 0; i < imgBeachBallX.length; i++){
    image(imgBeachBall, imgBeachBallX[i], imgBeachBallY[i], 60, 60) 

  if(dist(mouseX, mouseY, imgBeachBallX[i], imgBeachBallY[i]) <30 & mouseIsPressed){
      imgBeachBallX.splice(i, 1, )
      imgBeachBallY.splice(i, 1, )


  }


}


}

function mouseClicked(){

  //imgBeachBallX.push(mouseX)
  //imgBeachBallY.push(mouseY)


}


function keyPressed(){

  if (key === 'x') {
     imgBeachBallX.splice(imgBeachBallX, imgBeachBallX.length, -1, 1)
     imgBeachBallY.splice(imgBeachBallY, imgBeachBallY.length,  -1, 1)
  

  if(key=== 'a'){

    imgBeachBallX.push(mouseX)
  imgBeachBallY.push(mouseY)


  }

  }

  print(imgBeachBallX)


}

