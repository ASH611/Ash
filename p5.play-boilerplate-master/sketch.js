const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground (200,200,480,50);
 

}

function draw() {
  background(255,255,255);  
  
  if (frameCount%60===0) {
      particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
    
  ground1.display();
  drawSprites();
  
}