const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;
var engine,world;
var box1;
function setup() {
  createCanvas(400,400);
  engine = ENGINE.create();
 world = engine.world;
 box1=new Box();
 console.log(box1);
}

function draw() {
  background("yellow"); 
  
  ENGINE.update(engine);                                                                                               
box1.display()
}

