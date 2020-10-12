
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var land;
var gamestate, PLAY, END;
PLAY = 1;
END = 0;
gamestate = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  land = createSprite(0,345,800,7);
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {

  background("white");
  
  if (gamestate === PLAY){
      food();
      stones();
  
     if(keyDown("space") && monkey.y > 305) {
        monkey.velocityY = -16;
        
      
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;

  }

  if(obstacleGroup.isTouching(monkey)){
    gamestate = END;
  }
  
  if(gamestate === END ){
    
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
    
    
  }
  
monkey.collide(land);  
  
  drawSprites();
  
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}


function food()
{
 
  if (frameCount % 70 === 0){
      var banana = createSprite(600,165,10,40);
      banana.addImage(bananaImage);
      banana.scale = 0.08; 
      banana.velocityX = -4; 
    
      banana.y = Math.round(random(90,310));
      banana.lifetime = 150;
    
     foodGroup.add(banana);
  }
 
}

function stones()
{
   
  if (frameCount % 80 === 0){
      var obstacle = createSprite(600,326,20,20);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.09;
      obstacle.velocityX = -4
    
    obstacleGroup.add(obstacle);
    
  }
  
}

