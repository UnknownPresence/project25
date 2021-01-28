
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(1200,650);
	ground = new Ground(width/2,670,width,20);
	paper = new Paper(200,450,70);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-250	});
	}
}


