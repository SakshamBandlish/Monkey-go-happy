
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground;
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneimage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,600)
  //creating mokey
  monkey=createSprite(76,310,50,50);
  monkey.addAnimation("movingm",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;  

  
}


function draw() {
  background(255);
  score = score + Math.round(getFrameRate()/63);
  text("Score = "+score,225,100);
  if(ground.x<0){
  ground.x=ground.width/2;  
     
  }
  
  bananas()
  stone()
  if(keyDown("space")&& monkey.y>=299){
    
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);

  drawSprites();
}




function bananas() {
  
  if(frameCount % 95 === 0){
    var banana=createSprite(400,300,50,50);
    banana.y=Math.round(random(200,250));
    banana.velocityX=-2;
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime=200;
    
  }
  
}


function stone() {
  
  if(frameCount % 200 === 0){
    var stone=createSprite(400,310,50,50);
    //stone.y=Math.round(random(250,350));
    stone.velocityX=-2;
    stone.addImage(stoneimage)
    stone.scale=0.2
    stone.lifetime=200;
    
  }
  
}


