var dogImg,dog1Img,happyDog,Dog2
var database,foodS,foodStock
function preload()
{
  dogImg = loadImage("dogImg.png");
  dog1Img = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  Dog2 = createSprite(200,200,50,50);
  Dog2.addImage(dogImg);
  Dog2.scale=0.2
  
  happyDog = createSprite(300,300,50,50);
  happyDog.addImage(dog1Img);
  happyDog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     Dog2.addImage(dog1Img);
   }
  drawSprites();
  
   writeStock();

   


}

function writeStock(x) {

if(x<=0){
  x=0;
}else{
  x=x-1;
}

database.ref('/').update({
  Food:x
})
}

