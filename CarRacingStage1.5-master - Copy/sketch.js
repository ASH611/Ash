var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var persons, p1, p2, p3, p4;

var trac, p1_img, p2_img, p3_img, p4_img;

function preload(){

trac = loadImage("../images/trac.jpg");
ground = loadImage("../images/ground.png");
p1_img = loadImage("../images/player1.png");
p2_img = loadImage("../images/player2.png");
p3_img = loadImage("../images/player3.png");
p4_img = loadImage("../images/player4.png");





}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
