
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var stone,hammer;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new Hammer(400,300,50,100)
	stone1 = new Stone(400,100,50)
	ground1 = new Ground(400,700,800,20)
	rubber1=new Rubber(500,50,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer1.display();
stone1.display();
ground1.display();
rubber1.display();
  drawSprites();
 
}



