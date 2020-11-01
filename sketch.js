const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameengine,gameworld;
var ground;
var box1,box2,box3,box4,box5;
var Pig1;
var Pig2;
var Log1;
var Log2;
var Log3;
var Log4;
var bird;

function setup() {
  createCanvas(1200,400);

  gameengine = Engine.create();
  gameworld = gameengine.world;

  ground= new Ground(600,390,1200,20);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  Pig1 = new Pig(810,350);
 Log1 = new Log(810,250,300,PI/2)

box3 = new Box(700,230,70,70);
box4 = new Box(920,230,70,70);
Pig2 = new Pig(810,210);
Log2 = new Log(810,170,300,PI/2);

box5 = new Box(810,150,70,70);
Log3 = new Log(760,110,150,PI/6);
Log4 = new Log(870,110,150,-PI/6);
bird = new Bird(100,100)
}

function draw() {
  background("yellow");

  Engine.update(gameengine)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  Pig1.display();
  Pig2.display();
  Log1.display();
  Log2.display();
  Log3.display();
  Log4.display();
  bird.display();
}