
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.setVelocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  score=0;
}


function draw() {
background(225);
  text("survival Time :"+ score,200,50);
 
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY= monkey.velocityY+0.8;
 monkey.collide(ground);
  Banana();
  Rock();

  drawSprites();
}
function Banana(){
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
}
function Rock(){
  if(frameCount % 300=== 0) {
   obstacle = createSprite(600,320,20,20);
    //obstacle.debug = true;
    obstacle.velocityX = -7;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.lifetime=130;

  obstacleGroup.add(obstacle);
  
    }
}




