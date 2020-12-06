var PLAY = 1;
var END = 0;
var GameState = 1;
var sword, fruit1, fruit2, fruit3, fruit4, alien1, alien2, fruitImage1, fruitImage2, fruitImage3, fruitImage4, enemy1, enemy2;
var swordImage;
var score = 0;
var fruitGroup1, fruitGroup2, fruitGroup3, fruitGroup4, EnemyGroup;
var position;
var num1, num2, num3, num4;

function preload(){
  swordImage = loadImage("sword.png");
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  gameoverImage = loadImage("gameover.png");
  
  gameoverSound = loadSound("gameover.mp3")
  
  swordSound = loadSound("knifeSwooshSound.mp3")
}

function setup(){
  createCanvas(600, 600);
  
  sword = createSprite(40,200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.3;
  
  fruitGroup1 = createGroup();
  fruitGroup2 = createGroup();
  fruitGroup3 = createGroup();
  fruitGroup4 = createGroup();
  EnemyGroup = createGroup();
}

function draw(){
  
  background("lightblue");
  
  text("Score: "+ score, 300, 500);
  
  if(GameState === PLAY){
  sword.x = World.mouseX;
  sword.y = World.mouseY;
    
  fruits();
  Enemy();
    
  if(fruitGroup1.isTouching(sword)){
  fruitGroup1.destroyEach();
  score = score +1;
  swordSound.play();  
  }
  if(fruitGroup2.isTouching(sword)){
  fruitGroup2.destroyEach();
  score = score +1;
  swordSound.play();  
  }
  if(fruitGroup3.isTouching(sword)){
  fruitGroup3.destroyEach();
  score = score +1;
  swordSound.play();
  }
  if(fruitGroup4.isTouching(sword)){
  fruitGroup4.destroyEach();
  score = score +1;
  swordSound.play();
  }
  }
  
  if(EnemyGroup.isTouching(sword)){
    
    GameState = END;
    
    gameoverSound.play();
    
   /* fruitGroup1.destoryEach();
    fruitGroup2.destoryEach();
    fruitGroup3.destoryEach();
    fruitGroup4.destoryEach();
    
    EnemyGroup.destroyEach();
    
    fruitGroup1.velocity = 0;
    fruitGroup2.velocity = 0;
    fruitGroup3.velocity = 0;
    fruitGroup4.velocity = 0; */
    
    fruitGroup1.setVelocityEach(0);
    fruitGroup2.setVelocityEach(0);
    fruitGroup3.setVelocityEach(0);
    fruitGroup4.setVelocityEach(0);
    EnemyGroup.setVelocityEach(0);
    
    
    sword.addImage(gameoverImage);
    sword.x = 300;
    sword.y = 300;
    
  }
  
  drawSprites();
}

function Enemy() {
  if(frameCount % 120 === 0){
    var alien1 = createSprite(620,Math.round(random(20,580)),10,10);
    alien1.velocityX = -1;
    alien1.addImage(alien1Image);
    alien1.scale = 0.5;
    EnemyGroup.add(alien1);
  }
  if(frameCount % 120 === 0){
    var alien2 = createSprite(620,Math.round(random(20,580)),10,10);
    alien2.velocityX = -1;
    alien2.addImage(alien1Image);
    alien2.scale = 0.5;
    EnemyGroup.add(alien2);
  }
  
}

function fruits() {
  if(frameCount % 120 === 0){
    position = Math.round(random(1,2));
    if(position == 1){
      
      num1 = 620;
      
    }
    else{
   
      num1 = 20;
      
    }
    var fruit1 = createSprite(num1,Math.round(random(20,580)),10,10);
    fruit1.addImage(fruitImage1);
    fruit1.scale = 0.2;
    fruitGroup1.add(fruit1);
    if(position == 1){
      
      fruit1.velocityX = -1;
      
    }
    else{
   
     fruit1.velocityX = 1;
      
    }
  }
  if(frameCount % 200 === 0){
        position = Math.round(random(1,2));
    if(position == 1){
      
      num2 = 620;
      
    }
    else{
   
      num2 = 20;
      
    }
  var fruit2 = createSprite(num2,Math.round(random(20,580)),10,10);
  fruit2.velocityX = -1;
  fruit2.addImage(fruitImage2);
  fruit2.scale = 0.2;
  fruitGroup2.add(fruit2);
    if(position == 1){
      
      fruit2.velocityX = -1;
      
    }
    else{
   
     fruit2.velocityX = 1;
      
    }
  }
  if(frameCount % 300 === 0){
        position = Math.round(random(1,2));
    if(position == 1){
      
      num3 = 620;
      
    }
    else{
   
      num3 = 20;
      
    }
  var fruit3 = createSprite(num3,Math.round(random(20,580)),10,10);
  fruit3.velocityX = -1;
  fruit3.addImage(fruitImage3);
  fruit3.scale = 0.2;
  fruitGroup3.add(fruit3);
    if(position == 1){
      
      fruit3.velocityX = -1;
      
    }
    else{
   
     fruit3.velocityX = 1;
      
    }
  }
  if(frameCount % 400 === 0){
        position = Math.round(random(1,2));
    if(position == 1){
      
      num4 = 620;
      
    }
    else{
   
      num4 = 20;
      
    }
  var fruit4 = createSprite(num4,Math.round(random(20,580)),10,10);
  fruit4.velocityX = -1;
  fruit4.addImage(fruitImage4);
  fruit4.scale = 0.2;
  fruitGroup4.add(fruit4);
    if(position == 1){
      
      fruit4.velocityX = -1;
      
    }
    else{
   
     fruit4.velocityX = 1;
      
    }
  }
 
}

