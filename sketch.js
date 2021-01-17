var chopperA,chopper;
var cloudysky1,cloudysky2,cloudyskyImage,cloudyskyImage2;
var shootingi;
var missile,missileimage,missilegroup;
var enemyAnimation,enemyg;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var missilecount;
var missileicon,missileiconimage;
var missiledrop1,missiledrop2,missiledrop3,missiledrop4,missiledrop5;
var missiledrop1g,missiledrop2g,missiledrop3g,missiledrop4g,missiledrop5g;
var score;
var reset,reseti1,reseti2;

//gameStates
gameState=1;
Play=1;
End=1;

//endstate Animation
var chopperStop,enemystop;

function preload(){
  
  //loading chopper animation
  chopperA=loadAnimation("1.png","2.png","3.png","4.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png")
  
  //loading sky
  cloudyskyImage=loadImage("CLOUG BACKGROUNXCD.png");
  cloudyskyImage2=loadImage("CLOUG BACKGROUND.png");
  
  //loading missile and shooting
  shootingImage=loadImage("SHOOTING ICON.png");
  missileimage=loadImage("MISSILE.png");
  
  //loading enemy
  enemyAnimation=loadAnimation("a1.png","a2.png","a3.png","a4.png","a5.png","a6.png","a7.png","a8.png","a9.png","a10.png","a11.png","a12.png","a13.png","a14.png","a15.png","a16.png")
  
  //loadiing missile icon
  missileiconimage=loadImage("MISSILE ICON.png");
  missiledropA=loadAnimation("MISSILEDROP1.png","MISSILEDROP2.png","MISSILEDROP3.png","MISSILEDROP4.png","MISSILEDROP5.png","MISSILEDROP6.png","MISSILEDROP7.png","MISSILEDROP8.png");

  //loading images for chopper and enemy in endstate
  chooperstop=loadAnimation("1.png","a1.png");
  enemystop=loadImage("a1.png");

  //loadig omages for reset icon
  reseti1=loadImage("reset1.png");
  reseti2=loadImage("reset2.png");

  //loading gameover
  gameoveri=loadImage("GAMEOVER-export.png")

  //SOUND FILES
  helisound=loadSound("HELICOPTER SOUND1.mp3")
  GOVERsound=loadSound("GOSOUND.wav");
  clickit=loadSound("CLICK.wav");
}

function setup(){
  createCanvas(700,500); 
  background("white");
  
  
   //cloud background
  cloudysky1=createSprite(350,250);
  cloudysky1.addImage(cloudyskyImage);
  cloudysky1.velocityX=-5;
  cloudysky1.scale=1.08;
  
  cloudysky2=createSprite(1040,250);
  cloudysky2.addImage(cloudyskyImage);
  cloudysky2.velocityX=-5;
  cloudysky2.scale=1.08;
  
    //chopper 
  chopper=createSprite(250,250);
  frameRate(60);
  
  chopper.scale=1.5;
  chopper.debug=false;
  chopper.addAnimation("slying",chopperA);
  chopper.setCollider("circle",0,0,20);


  //creating 10 enemies and make them reappear
enemy1=createSprite(700,Math.round(random(20,490)));
enemy1.addAnimation("enemyf1",enemyAnimation)
enemy1.velocityX=-3;
enemy1.debug=false;
enemy1.scale=1.5;
enemy1.setCollider("circle",0,0,30);

enemy2=createSprite(1000,Math.round(random(20,490)));
enemy2.addAnimation("enemyf2",enemyAnimation)
enemy2.velocityX=-3;
enemy2.debug=false;
enemy2.scale=1.5;
enemy2.setCollider("circle",0,0,30);

enemy3=createSprite(1300,Math.round(random(20,490)));
enemy3.addAnimation("enemyf3",enemyAnimation)
enemy3.velocityX=-3;
enemy3.debug=false;
enemy3.scale=1.5;
enemy3.setCollider("circle",0,0,30);

enemy4=createSprite(1600,Math.round(random(20,490)));
enemy4.addAnimation("enemyf4",enemyAnimation)
enemy4.velocityX=-3;
enemy4.debug=false;
enemy4.scale=1.5;
enemy4.setCollider("circle",0,0,30);

enemy5=createSprite(1900,Math.round(random(20,490)));
enemy5.addAnimation("enemyf5",enemyAnimation)
enemy5.velocityX=-3;
enemy5.debug=false;
enemy5.scale=1.5;
enemy5.setCollider("circle",0,0,30);

missilegroup=createGroup();
  
//missile count icon 
missileicon=createSprite(30,80);
missileicon.scale=0.5;
missileicon.addImage(missileiconimage);
missilecount=10;

//invisible pointer creation


gameover=createSprite(350,250);
gameover.addImage(gameoveri)

//depth
missileicon.depth=gameover.depth;
missileicon.depth=missileicon.depth+1;



reseticon=createSprite(350,350,50,50);
reseticon.addImage(reseti1);

invisible=createSprite(10,10,10,10);
invisible.visible=false;

//creating groups
  missiledrop1g=createGroup();
  missiledrop2g=createGroup();
  missiledrop3g=createGroup();
  missiledrop4g=createGroup();
  missiledrop5g=createGroup();
  
//score
score=0;

//invisible edges
ie1=createSprite(0,250,1,500);
ie2=createSprite(700,250,1,500);
ie3=createSprite(350,0,700,1);
ie4=createSprite(350,500,700,1);
ie1.visible=false;
ie2.visible=false;
ie3.visible=false;
ie4.visible=false;
}

function draw(){
  invisible.x=World.mouseX;
  invisible.y=World.mouseY;
  
  //chopper.collide
  chopper.collide(ie1);
  chopper.collide(ie2);
  chopper.collide(ie3);
  chopper.collide(ie4);

  //enemies adaptivity
enemy1.velocityX=-(3+(score/20));
enemy2.velocityX=-(3+(score/20));
enemy3.velocityX=-(3+(score/20));
enemy4.velocityX=-(3+(score/20));
enemy5.velocityX=-(3+(score/20));

  background(rgb(249,249,249));
 if(invisible.isTouching(reseticon)){
 reseticon.addImage(reseti2);
}
else{
 reseticon.addImage(reseti1);
}

  if(gameState===Play ){ 
    reseticon.x=1000;
    //resetting background
  if(cloudysky1.x==-350){
    cloudysky1.x=1050;
  }
   if(cloudysky2.x==-350){
    cloudysky2.x=1050;
  }
    

  
  
  //controls to chopper
  if(keyDown("W")){
    chopper.velocityY=-7-(score/10);
  }
   if(keyDown("S")){
    chopper.velocityY=7+score/10
  }
  if(keyDown("A")){
    chopper.velocityX=-7;-(score/10)
  }
  if(keyDown("D")){
    chopper.velocityX=7+score/10;
  }
    if(keyWentUp("W")){
    chopper.velocityY=0;
  }
   if(keyWentUp("S")){
    chopper.velocityY=0;
  }
  if(keyWentUp("A")){
    chopper.velocityX=0;
  }
  if(keyWentUp("D")){
    chopper.velocityX=0;
  }
  
  //code for missile and icon shooting
   if(keyDown("space")&& missilecount>0){
     chopper.velocityX=0;
    chopper.velocityY=0;
   }
  if(keyWentDown("space")&& missilecount>0){
  //shooting icon
  shootingi=createSprite(10,10,10,10);
  shootingi.addImage(shootingImage);
  shootingi.scale=0.5;
  shootingi.lifetime=10;
  shootingi.x=chopper.x+55;
  shootingi.y=chopper.y+22;
  helisound.play();
  spawnmissile();
  missilecount=missilecount-1;
  }

  
  
  //CODE FOR ENEMY TO RESEET AND MISSILE DROP
if(missilegroup.isTouching(enemy1)){
   missileammodrop1();
  score=score+1;
  enemy1.x=Math.round(random(1000,1500));
  enemy1.y=Math.round(random(10,490))
}

if(missilegroup.isTouching(enemy2)){
  missileammodrop2();
  score=score+1;
   enemy2.x=Math.round(random(1000,1500));
   enemy2.y=Math.round(random(10,490))
   
}
  
if(missilegroup.isTouching(enemy3)){
  missileammodrop3();
  score=score+1;
  enemy3.x=Math.round(random(1000,1500));
  enemy3.y=Math.round(random(10,490))
   
}
  
if(missilegroup.isTouching(enemy4)){
    missileammodrop4();
  score=score+1;
  enemy4.x=Math.round(random(1000,1500));
  enemy4.y=Math.round(random(10,490))
   
}
  
if(missilegroup.isTouching(enemy5)){
  missileammodrop5();
  score=score+1;
  enemy5.x=Math.round(random(1000,1500));
  enemy5.y=Math.round(random(10,490))
  
}
  
  //code for drop pick up
     if(chopper.isTouching(missiledrop1g)){
    missiledrop1g.destroyEach();
    missilecount=missilecount+1;
  }
  
  if(chopper.isTouching(missiledrop2g)){
    missiledrop2g.destroyEach();
    missilecount=missilecount+1;
    }
   if(chopper.isTouching(missiledrop3g)){
    missiledrop3g.destroyEach();
     missilecount=missilecount+1;
    }
  if(chopper.isTouching(missiledrop4g)){
    missiledrop4g.destroyEach();
    missilecount=missilecount+1;
    
    }
  
   if(chopper.isTouching(missiledrop5g)){
     missiledrop5g.destroyEach();
    missilecount=missilecount+1;
     }
     //visibility
     reseticon.visible=false;
     gameover.visible=false;
    }

     if(chopper.isTouching(enemy1) || chopper.isTouching(enemy2) || chopper.isTouching(enemy3) || chopper.isTouching(enemy4) || chopper.isTouching(enemy5) ||enemy1.isTouching(ie1) || enemy2.isTouching(ie1) || enemy4.isTouching(ie1) || enemy5.isTouching(ie1) ){
      gameState=2;
      GOVERsound.play();
}

  
   //DECLARING PRPERITES UNDER ENDSTATE

  if(gameState===2){
ENDSTATE();
      //destroying everything
      chopper.visible=false;
      enemy1.visible=false;
      enemy2.visible=false;
      enemy3.visible=false;
      enemy4.visible=false;
      enemy5.visible=false;
      missiledrop1g.destroyEach();
      missiledrop2g.destroyEach();
      missiledrop3g.destroyEach();
      missiledrop4g.destroyEach();
      missiledrop5g.destroyEach();
      
     //reseticon and gameover text
     reseticon.visible=true;
     gameover.visible=true;
      //resetting enemy position
      enemy1.x=Math.round(random(1000,1500));
      enemy1.y=Math.round(random(30,470));

      enemy2.x=Math.round(random(1000,1500));
      enemy2.y=Math.round(random(30,470));
      
      enemy3.x=Math.round(random(1000,1500));
      enemy3.y=Math.round(random(30,470));

      enemy4.x=Math.round(random(1000,1500));
      enemy4.y=Math.round(random(30,470));

      enemy5.x=Math.round(random(1000,1500));
      enemy5.y=Math.round(random(30,470))
      //
      reseticon.x=350;
      reseticon.y=350;
    
    }
    
  //resetting game
  if(mousePressedOver(reseticon)){
    clickit.play();
       
    reseticon.visible=false;
    gameover.visible=false;
    gameState=1;
    //making them revisible
    chopper.visible=true;
    enemy1.visible=true;
    enemy2.visible=true;
    enemy3.visible=true;
    enemy4.visible=true;
    enemy5.visible=true;
    //giving back them there velocities
  cloudysky1.velocityX=-5;
  cloudysky2.velocityX=-5;
  enemy1.velocityX=-3;
  enemy2.velocityX=-3;
  enemy3.velocityX=-3;
  enemy4.velocityX=-3;
  enemy5.velocityX=-3;
  //resettingscore
  score=0;
  missilecount=10;

  //chopper icon reset
  chopper.x=250;
  chopper.y=250;
  }
  

  
  
  //console 
  drawSprites();
textSize(50);
stroke("white");
fill("yellow")
text(missilecount,50,90)
  
textSize(25);
fill("yellow");
stroke("white");
text("SCORE:  "+score,300,90);
  
console.log(enemy1.velocityX)

}

function spawnmissile(){
  
   //spawning missile
  var  missile=createSprite(10,10);
   missile.addImage(missileimage);
   missile.x=chopper.x+55;
   missile.y=chopper.y+22;
   missile.velocityX=10;
   missile.lifetime=200;
  missilegroup.add(missile);

  

}

function missileammodrop1(){
missiledrop1=createSprite(enemy1.x,enemy1.y);
  missiledrop1.addAnimation("drop from enemy",missiledropA);
  missiledrop1.scale=0.2;
  missiledrop1g.add(missiledrop1);
  
}

function missileammodrop2(){
  missiledrop2=createSprite(enemy2.x,enemy2.y);
  missiledrop2.addAnimation("drop from enemy",missiledropA);
  missiledrop2.scale=0.2;
  missiledrop2g.add(missiledrop2);
    
}
function missileammodrop3(){
  missiledrop3=createSprite(enemy3.x,enemy3.y);
  missiledrop3.addAnimation("drop from enemy",missiledropA);
  missiledrop3.scale=0.2;
  missiledrop3g.add(missiledrop3)
 
}
function missileammodrop4(){
  missiledrop4=createSprite(enemy4.x,enemy4.y);
  missiledrop4.addAnimation("drop from enemy",missiledropA);
  missiledrop4.scale=0.2;
  missiledrop4g.add(missiledrop4);
  
}

function missileammodrop5(){
missiledrop5=createSprite(enemy5.x,enemy5.y);
missiledrop5.addAnimation("drop from enemy",missiledropA);
missiledrop5.scale=0.2;
missiledrop5g.add(missiledrop5);
 
}

function ENDSTATE(){

  //CREATING RESET ICON 
  cloudysky1.velocityX=0;
  cloudysky2.velocityX=0;
  chopper.velocityX=0;
  chopper.velocityY=0;
  enemy1.velocityX=0;
  enemy2.velocityX=0;
  enemy3.velocityX=0;
  enemy4.velocityX=0;
  enemy5.velocityX=0;
}
