var runningMan_1, runningMan_2, runningMan_3, runningMan_4
var runningMan_5, runningMan_6, runningMan_7, runningMan_8
var runningMan_ducking;
var runningMan, bob, stormCloud, sun, sunnyBackground, stormyBackground;
var ground;

var timeElapsed = 0;

function preload(){

  //loading obstacles
  parrotBlue = loadAnimation("images/blueBird1.png", "images/blueBird2.png", "images/blueBird3.png", "images/blueBird4.png", "images/blueBird5.png", "images/blueBird6.png", "images/blueBird7.png");
  redBird = loadAnimation("images/redBird1.png", "images/redBird2.png", "images/redBird3.png", "images/redBird4.png");
  eagle = loadAnimation("images/eagle1.png", "images/eagle2.png", "images/eagle3.png", "images/eagle4.png");
  rock1 = loadImage("images/rock.png");
  rock2 = loadImage("images/rock2.png");
  rock3 = loadImage("images/rock3.png");


  //loading animations
  runningMan = loadAnimation("images/runningMan_1.png", "images/runningMan_2.png", "images/runningMan_3.png", "images/runningMan_4.png", "images/runningMan_5.png", "images/runningMan_6.png", "images/runningMan_7.png", "images/runningMan_8.png")
  walkingMan = loadAnimation("images/runningMan_3.png", "images/runningMan_5.png", "images/runningMan_7.png")

  //both backgrounds
  stormyBackground = loadImage("images/stormyBackground.jpg");
  sunnyBackground = loadImage("images/bg.png");

  //loading images
  rock = loadImage("images/rock.png");
  home = loadImage("images/home.png")
  sun = loadImage("images/sun.png")
  energyDrink = loadImage("images/energyDrink.png");

}

function setup() {

  //canvas size
  createCanvas(displayWidth, displayHeight);

  //make the sunny background and making it move
  backgr = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  backgr.addImage(sunnyBackground);
  backgr.scale = 1.5;

  //code for bob
  bob = createSprite(displayWidth/8, displayHeight/1.5);
  bob.addAnimation("running man", runningMan);
  bob.scale = 0.8

  //ground code
  ground = createSprite(displayWidth/2, displayHeight-20, displayWidth, 10);
  ground.visible = false;


}

function draw() {

  background("white");
  
//reseting both the backgrounds and the ground
  if(backgr.x<600){
    backgr.x = backgr.width/2;
  }
  backgr.velocityX = -3;

  if(ground.x<450){
    ground.x = ground.width/2
  }
  ground.velocityX = -3

  //switching the background
  timeElapsed = timeElapsed+1;

  if(timeElapsed === 150){
    backgr.addImage(stormyBackground);
  }

  //making bob jump 
  if(keyDown("j")){
    bob.velocityY = -16;
  } 
  bob.velocityY = bob.velocityY + 0.8;

  bob.collide(ground);

  console.log(bob.y);

  spawnObstacles();

  drawSprites();

}

function spawnObstacles() {
  if(frameCount % 150 === 0) {
    var obstacle = createSprite(displayWidth+20, displayHeight);
    obstacle.velocityX = -(10);
    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addAnimation("Blue Parrots", parrotBlue);
              obstacle.y = displayHeight-displayHeight/2;
              obstacle.scale = 0.35;
              break;
      case 2: obstacle.addAnimation("Red Birds", redBird);
              obstacle.y = displayHeight-375;
              obstacle.scale = 0.5;
              break;
      case 3: obstacle.addAnimation("Eagle", eagle);
              obstacle.y = displayHeight-375;
              obstacle.scale = 1.5
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.lifetime = Math.round(displayWidth/6)
  }
}
