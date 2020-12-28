var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageBody,ground1,b1,b2,b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	packageSprite=createSprite(400, 50, 10,10);
	packageSprite.addImage(packageIMG);
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;
	engine = Engine.create();
	world = engine.world;
	ground1=new ground(400,690,800,10);
    packageBody = Bodies.rectangle(width/2 , 200 , 50 , 50,{restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	packageSprite.scale=0.2;
	b1=new blocks(300,650,20,80);
	b2=new blocks(400,680,180,20);
	b3=new blocks(500,650,20,80);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
  ground1.display();
  b1.display();
  b2.display();
  b3.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}