let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
lander_img=loadImage("normal.png")
bg_img=loadImage("bg.png")
fogo_ant=loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png")
fumaçaD_ant=loadAnimation("right_thruster_1.png","right_thruster_2.png")
fumaçaE_ant=loadAnimation("left_thruster_1.png","left_thruster_2.png")


}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
 lander=createSprite(100,50,30,30)
  lander.addImage(lander_img)
  lander.scale = 0.1
  lander.addAnimation("fogo_ant", fogo_ant)
  lander.addAnimation("fumaçaD_ant", fumaçaD_ant)
  lander.addAnimation("fumaçaE_ant", fumaçaE_ant)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Velocidade Vertical: "+ round(vy),800,75)
  pop();

  vy = vy + g
  lander.position.y = lander.position.y + vy
  lander.position.x = lander.position.x + vx
  drawSprites();
}


function keyPressed(){
  if (keyCode == LEFT_ARROW){
    lander.changeAnimation("fumaçaD_ant")
    left()
  }
  
  if (keyCode == RIGHT_ARROW){
    lander.changeAnimation("fumaçaE_ant")
    right()
  }

  if (keyCode == UP_ARROW){
    lander.changeAnimation("fogo_ant")
    up()
  }  
}

function up(){
  vy= vy - 2
}

function right(){
  vx = vx + 1
}

function left(){
  vx = vx - 1
}