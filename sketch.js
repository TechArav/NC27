const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5,roof
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(350,100,300,30);
	world.add(world,roof)

	bobObject1=new Bob(250,300);
	bobObject2=new Bob(300,300);
	bobObject3=new Bob(350,300);
	bobObject4=new Bob(400,300);
	bobObject5=new Bob(450,300);
	
	

	

	//var render = Render.create({
	  //element: document.body,
	  //engine: engine,
	  //options: {
	  //  width: 1200,
	    //: 700,
	    //wireframes: false
	  //}
//});


	rope1=new rope(bobObject1.body,roofObject.body,-100, 0)
	world.add(world,rope1)

	rope2=new rope(bobObject2.body,roofObject.body,-50, 0)
	world.add(world,rope2)

	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	world.add(world.rope3)

	rope4=new rope(bobObject4.body,roofObject.body,+50, 0)
	world.add(world.rope4)

	rope5=new rope(bobObject5.body,roofObject.body,+100, 0)
	world.add(world.rope5)


	Engine.run(engine);
	
  
}


function draw() {
  
  background(230);
  roofObject.display();

  Engine.update(engine)

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === 32) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});

  	}
}


//function drawLine(constraint)
//{
	//bobBodyPosition=constraint.bodyA.position
	//roofBodyPosition=constraint.bodyB.position

	//roofBodyOffset=constraint.pointB;
	
	//roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	//roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	//line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
//}
