

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
  
   if(particle!=null)
   {

    particle.display();

    if(particle.body.position.y>760){

     if(particle.body.position.x<300){
       score=score+500;
       particle=null;
       if (count>= 5 ) gameState = "end";
     }

    }


    
   if(particle!=null)
   {

    particle.display();

    if(particle.body.position.y>760){

     if(particle.body.position.x>301 && particle.body.position.x<601){
       score=score+100;
       particle=null;
       if (count>= 5 ) gameState = "end";
     }

    }


    
   if(particle!=null)
   {

    particle.display();

    if(particle.body.position.y>760){

     if(particle.body.position.x>601 && particle.body.position.x<900){
       score=score+200;
       particle=null;
       if (count>= 5 ) gameState = "end";
     }

    }


   }




}