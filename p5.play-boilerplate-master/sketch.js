var stand1,block1;
var polygon1;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  stand1 = new Ground (400,200,50,50);
  
  block0 = new Block(300,235,30,40);
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(480,235,30,40);
  block7 = new Block(510,235,30,40);
  
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

  polygon1 = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  drawSprites();
  stand1.display();
  block0.display();
  block1.display();

  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block0.score();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();


  text("Score : "+score,750,40);

  polygon1.display();
  

}

function keyPressed() {
   if (keyCode === 32) {
      slingShot.attach(this.polygon);
   }
}