const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var Playerbase, Player, Computerbase, Computerplayer

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   Playerbase=new playerbase(300, random(450, height-300), 180, 150);
   Player=new player(300, Playerbase.body.position.y-153, 50, 180);
   Computerbase=new computerbase(width-300, random(450, height-300), 180, 150);
   Computerplayer=new computerplayer(width-300, Computerbase.body.position.y-153, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   Playerbase.display();
   Player.display();

   Computerbase.display();
   Computerplayer.display();
}
