var paper,box1,box2,box3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper= new Paper(150,650,20);
	box1 = new Box(660,550,200,30);
	box2 = new Box(600,650,20,100);
	box3 = new Box(600,450,20,100);
	ground = new Ground(400,670,800,20);
	
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


  ground.display();

  paper.display();
  box1.display();
  box2.display();
  box3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:45,y:-45});
	}
}

