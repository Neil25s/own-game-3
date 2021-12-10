var alien,alienImg,coin,coinImg,food,food2,food3,food4,food5,foodImg,key,keyImg
var bg,bgImg;
var keyGroup;
var life,lifeImg;
var door;
var bg2;
var foodSound;
var coinSound;
var KeySound;
var gameState=1;

function preload(){
  bgImg=loadImage("BG2.jpg")
  alienImg=loadImage("alien.png")
  coinImg=loadImage("coin.png")
  foodImg=loadImage("apple.png")
  keyImg=loadImage("key.png")
lifeImg=loadImage("life.png")
bg2=loadImage("BG3.jpg")
foodSound=loadSound("food.mp3")
coinSound=loadSound("coin.mp3")
keySound=loadSound("key_door.wav")
}

function setup() {

  door=createSprite(750,5,75,150)
  door.shapeColor="brown"
  door.visible=false

   wall1 = createSprite(600,200, 40,160);
   wall2 = createSprite(600, 294, 160, 40);
 wall3 = createSprite(742, 300, 40, 160);
  wall4 = createSprite(598, 368,160,40);
 wall5 = createSprite(696,440,160, 40);
 wall6 = createSprite(560, 456, 40, 160);
 wall7 = createSprite(642, 580, 40, 160);
 wall8 = createSprite(500,590, 160, 40);
 wall9 = createSprite(468,452, 40,160);
 wall10 = createSprite(755,572,40,160);
 wall11 = createSprite(100, 716,160,40);
 wall12 = createSprite(252, 700, 40,160);
 wall13 = createSprite(144,630,160, 40);
 wall14 = createSprite(86, 554, 440, 40);
 wall15 = createSprite(332, 654, 40, 200);
 
 wall16 = createSprite(440, 680, 40, 160);
 wall17 = createSprite(500,742, 160, 40);
 wall18 = createSprite(560, 680, 40, 160);
 wall19 = createSprite(698, 702, 160, 20);
 wall20 = createSprite(700,768, 160, 40);
  
 wall21 = createSprite(300, 480, 160, 40);
 wall22 = createSprite(100,480, 160, 40);
 wall23 = createSprite(300, 400, 160, 40);
 wall24 = createSprite(100,400, 160, 40);
 wall25 = createSprite(200,170, 40, 160);
 
 wall26 = createSprite(300,210, 160, 40);
 wall27 = createSprite(360, 270, 40, 160);
 wall28 = createSprite(454, 288, 100, 40);
 wall29 = createSprite(680,210, 40, 40);
 wall30 = createSprite(100,240, 40, 200);
 
 wall31 = createSprite(240, 128, 200, 40);
 wall32 = createSprite(400, 124, 40, 160);
 wall33 = createSprite(34, 242, 40, 40);
 wall34 = createSprite(488, 76, 40, 160);
// wall35 = createSprite(98, 44, 320, 40);
 wall36 = createSprite(600, 44, 160, 40);
 wall37 = createSprite(480,236, 40, 40);
 wall38 = createSprite(712,128, 160,40);

 //wall10.shapeColor="Red" 

  alien=createSprite(40,760,26,26)
  alien.addImage(alienImg)
  alien.scale=0.35
  createCanvas(800,800);
  alien.debug=true;
  alien.setCollider("rectangle",0,0,70,70)

  key=createSprite(700,572,20,20)
  key.addImage(keyImg);
 // key.visible=false

food=createSprite(20,438,20,20)
food.addImage(foodImg);
food.scale=0.06


food2=createSprite(738,182,10,10)
food2.addImage(foodImg);
food2.scale=0.06

food3=createSprite(776,732,20,20)
food3.addImage(foodImg);
food3.scale=0.06

food4=createSprite(350,160,20,20)
food4.addImage(foodImg);
food4.scale=0.06

food5=createSprite(508,400,20,20)
food5.addImage(foodImg);
food5.scale=0.06

/*
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
*/
  
keyGroup=new Group()
keyGroup.add(key)

showFuelBar();


}


function draw() {
  background(bgImg); 

  createEdgeSprites();

  //if (alien.x===700 || alien.y===572){
    if (keyGroup.isTouching(alien)){

      fill("white")
textSize(30)
  text("EXIT",720,50)
    
    //  key.visible=false;
    keySound.play();
     console.log("Ohh")
    keyGroup.destroyEach();
    door.visible=true;
    }

  if(keyDown("up")) {
   // alien.velocityX = 0;
   // alien.velocityY = -2;
    alien.y=alien.y-4;
    r2.width=r2.width-.5
     if (r2.width<0){
     text("u lose!",400,400)
     } 
  }
  if (keyDown("down")) {
  // alien.velocityX = 0;
    //  alien.velocityY = 3;
     alien.y=alien.y+4;
     r2.width=r2.width-.5
     if (r2.width<0){
     text("u lose!",400,400)
     } 
  }
  if (keyDown("left")) {
   // alien.velocityX = -3;
   // alien.velocityY = 0;
    alien.x=alien.x-4;
    r2.width=r2.width-.5
     if (r2.width<0){
     text("u lose!",400,400)
     } 
  }
    if (keyDown("right")) {
    //alien.velocityX = 3;
  // alien.velocityY = 0;
    alien.x=alien.x+4;
    r2.width=r2.width-.5
     if (r2.width<0){
     text("u lose!",400,400)
     } 
   }



    if (alien.isTouching(wall1)||alien.isTouching(wall2)
  ||alien.isTouching(wall3)||alien.isTouching(wall4)||
  alien.isTouching(wall5)||alien.isTouching(wall6)||alien.isTouching(wall7)||
  alien.isTouching(wall8)||alien.isTouching(wall9)||alien.isTouching(wall10)||
 alien.isTouching(wall11)||alien.isTouching(wall12)||
  alien.isTouching(wall13)||alien.isTouching(wall14)||alien.isTouching(wall15)
  ||alien.isTouching(wall16)||alien.isTouching(wall17)||alien.isTouching(wall18)
  ||alien.isTouching(wall19)||alien.isTouching(wall20)||alien.isTouching(wall21)
  ||alien.isTouching(wall22)||alien.isTouching(wall23)||alien.isTouching(wall24)
  ||alien.isTouching(wall25)||alien.isTouching(wall26)||alien.isTouching(wall27)
  ||alien.isTouching(wall28)||alien.isTouching(wall29)||alien.isTouching(wall30)
  ||alien.isTouching(wall31)||alien.isTouching(wall32)||alien.isTouching(wall33)
  ||alien.isTouching(wall34)/*||alien.isTouching(wall35)*/||alien.isTouching(wall36)
  ||alien.isTouching(wall37)||alien.isTouching(wall38)) {
    alien.x = 40;
    alien.y = 760;
    alien.velocityX = 0;
    alien.velocityY = 0;
    r2.width=250
  }


  if (alien.isTouching(food)) {
foodSound.play();
  food.visible=false 
 // r2.width=r2.width+1
  r2.width=150
  food.destroy();
}
  if (alien.isTouching(food2)) {
    foodSound.play();
    food2.visible=false
  //  r2.width=r2.width+1
    r2.width=150
    food2.destroy();
  }  
  if (alien.isTouching(food3)){
    foodSound.play();
    food3.visible=false
  //  r2.width=r2.width+1
    r2.width=150
    food3.destroy();
  }
if (alien.isTouching(food4)) {
  foodSound.play();
  food4.visible=false
//  r2.width=r2.width+1
  r2.width=150
  food4.destroy();
}
  if (alien.isTouching(food5)){
    foodSound.play();
    food5.visible=false
   // r2.width=r2.width+1
    r2.width=150
    food5.destroy();
  }



  //if (alien.x===alien.x+5 || alien.y===alien.y+5){
  //  r2.width=r2.width-5
  //}







/*
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
*/
drawSprites();
fill("white")
textSize(30)
  text("EXIT",720,50)
  

//showFuelBar();
if (alien.isTouching(door)){
  gameState=2;
  keySound.play();
}
if(gameState===2){
  
  background(bg2)
image(bg2,800,0,100,100)
alien.x=40
alien.y=760
}

}

function showFuelBar() {
  push();
  //image(lifeImg,5,25,30,30)
  life=createSprite(20,40,20,20 )
  life.addImage(lifeImg)
  life.scale=0.1
  r1=createSprite(165, 40, 250, 40);
  r1.shapeColor=("white");
  r2=createSprite(165, 40, 250, 40);
  r2.shapeColor=("red");
  noStroke();
  pop();
}