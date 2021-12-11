var bgImg, boulderImg, boulder, fireballImg, fireball, player1Hurt, player2Hurt, player2, player1
var form, game

function preload(){
  bgImg = loadImage("assets/BackgroundForGame.gif")
  boulderImg = loadImage("assets/Boulder.gif")
  fireballImg = loadImage("assets/fireball.gif")




}



function setup() {
  createCanvas(600, windowHeight);
  
  game = new Game()
  game.start()

  
}

function draw() {
 background(0);
  // imageMode(CENTER)
  image(bgImg, 0,0, 600, height+200)
  
  
  
  
  
  drawSprites();
  
}




 

