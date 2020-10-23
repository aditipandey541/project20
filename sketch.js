const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;
var box1;

function setup() {
 var canvas= createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;

 box1=new Box(200,300,50,50);
 box2 = new Box(240,100,50,100);

 ground = new Ground(200,390,800,20)

/*var object_options =  {

  isStatic : true
 }

 ground=Bodies.rectangle(400,390,400,20,object_options);
 World.add(world,ground);
  console.log(ground);

  var ball_options = {

    restitution: 2.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 // console.log(object.type);
  //console.log(object.position.x)
  //console.log(object.position.y)
/* object=Bodies.rectangle(200,100,50,50,object_options);
World.add(world,object);
 console.log(object);
 console.log(object.type);
 console.log(object.position.x)
 console.log(object.position.y)
  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50); 

}*/}
function draw() {
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();

  ground.display();
  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20); 

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)*/
}

