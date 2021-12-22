var PLAY = 1;
var END = 0;
var rocket;
var rocketImg;
var backround;
var backroundImg;
var rock, rockImg;
var star,starImg;
var metoreteG,starGroup
var stars=0;
var score=0;



function preload(){
  
  rocketImg= loadImage("Space-Rocket.png");
  
  
  backroundImg=loadAnimation("0001.png","0002.png","0003.png","0004.png","0005.png","0006.png","0007.png","0008.png","0009.png","0010.png","0011.png","0012.png","0013.png","0014.png","0015.png","0016.png","0017.png","0018.png","0019.png","0020.png","0021.png","0022.png","0023.png","0024.png","0025.png","0026.png","0027.png","0028.png","0029.png","0030.png","0031.png","0032.png","0033.png","0034.png","0035.png","0036.png" )
  
  
  rockImg=loadImage("r1.png")
  starImg=loadImage("s1.png")
}
  
function setup() {
  createCanvas(500,500);
  
  
  
  backround=createSprite(0,0,500,500)
  backround.addAnimation("backround",backroundImg)
  backround.scale=2
  
  rocket=createSprite(250,450,30,30);
  rocket.addImage("Rocket", rocketImg);
  rocket.scale=0.2
  
  starGroup=new Group(); 
  rockGroup=new Group()
 
}

function draw() {
  background(220);
  text("Score: "+ score, 65,100);
  score=score+1
  
  if(rocket.isTouching(starGroup)){
     stars=stars+1
    
  }
  
  if(rocket.isTouching(rockGroup)){
     rockGroup.destroyEach()
    starGroup.destroyEach()
    
    
    rocket.setVelocity(0,0)
     text("Game Over",20,30)
  }
  
   
  if(keyDown(LEFT_ARROW)){
    rocket.x=rocket.x-5
  }
  
  if(keyDown(RIGHT_ARROW)){
    rocket.x=rocket.x+5
  }
  
 spawnrock()
 spawnstar()
  
  drawSprites();
  
  textSize(30)
  text("SCORE= "+score,20,30)
  
  
  text("STARS= "+stars,20,60)
  
}
function spawnrock() {
  
  if (frameCount % 200 === 0) {
    var rock = createSprite(random(40,380),-50,40,10);
     rock.addImage(rockImg);
     rock.scale = 0.3;
     rock.velocityY = +3;
     rockGroup.add(rock)
     
  }
}

function spawnstar() {
  
  if (frameCount % 110 === 0) {
    var star = createSprite(random(20,380),-50,40,10);
     star.addImage(starImg);
     star.scale = 0.1;
     star.velocityY = +3;
     star.lifetime=600
    starGroup.add(star)
   
     
  }
}
//move the rocket right side


//load Animation of backround



