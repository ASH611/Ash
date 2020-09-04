
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4;
var tree1, boy1, stone1,ground1;
 var treeImg, mango1Img, mango2Img, mango3Img, mango4Img;
 var boy1Img;

function preload()
{
	tree1Img = loadImage("sprites/tree.png");
	mango1Img = loadImage("sprites/mango.png");
	mango2Img = loadImage("sprites/mango.png");
	mango3Img = loadImage("sprites/mango.png");
	mango4Img = loadImage("sprites/mango.png");
	boy1Img = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(300,100,20,20);
	mango1 = new Mango(250,100,20,20);
	mango1 = new Mango(200,100,20,20);
	mango1 = new Mango(150,100,20,20);
	tree1 = new Tree(300,100,20,20);
	boy1 = new Boy(285,100,20,20);
	ground1 = new ground1(300,460,20,20);
	stone1 = new stone1(500,100,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  tree1.display();
  boy1.display();
  stone1.display();
  ground1.display();
  drawSprites();
 
}




