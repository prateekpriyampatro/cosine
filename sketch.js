
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var p,p2,p3,p4,p5,r,ps,ps1,ps2,ps3,ps4,ps5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	p= new bob(200,400,100);
	p2= new bob(300,400,100);
	p3= new bob(400,400,100);
	p4 = new bob(500,400,100);
	p5 = new bob(600,400,100);
	r = new roof(400,100,width/6,20);
	ps1 = new chain(p.body,r.body,100,0);
	ps2= new chain(r.body,p2.body,100,0);
	ps3 = new chain(r.body,p3.body,100,0);
	ps4 = new chain(r.body,p4.body,100,0);
	ps5 = new chain(r.body,p5.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  p.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  r.display();
  ps1.display();
  ps2.display();
  ps3.display();
  ps4.display();
  ps5.display();
  drawSprites();
 
}



