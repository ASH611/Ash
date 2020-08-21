
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bin=createSprite(550,650,200,20);
	bin.shapeColor=color(98)

	bin1 = createSprite(440,610,20,100);
	bin1.shapeColor=color(98);
	
	bin2 = createSprite(650,610,20,100);
	bin2.shapeColor=color(98);
	
	ground = new Ground(600,height,1200,20);
    paper = new Paper(100,610);
	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
    paper.display();
  drawSprites();
 keyPressed();
}

function keyPressed () {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}

