const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backGround;
var snowBall;
var snowBall2;
var snowBall3;
var snowBall4;
var snowBall5;
var snowBall6;
var snowBall7;
var snowBall8;
var snowBall9;
var snowBall10;
var snowBall11;
var snowBall12;


function setup() {
  createCanvas(800, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  snowBall=new Snow(50,0,50,50)
  snowBall2=new Snow(100,0,50,50)
  snowBall3=new Snow(150,0,50,50)
  snowBall4=new Snow(200,0,50,50)
  snowBall5=new Snow(250,0,50,50)
  snowBall6=new Snow(300,0,50,50)
  snowBall7=new Snow(350,0,50,50)
  snowBall8=new Snow(400,0,50,50)
  snowBall9=new Snow(450,0,50,50)
  snowBall10=new Snow(500,0,50,50)
  snowBall11=new Snow(550,0,50,50)
  snowBall12=new Snow(600,0,50,50)


}

function preload() {
  backGround = loadImage("snow1.jpg");
}

function draw() {
  background(backGround);
 Engine.update(myEngine)
 snowBall.display()
 snowBall2.display()
 snowBall3.display()
 snowBall4.display()
 snowBall5.display()
 snowBall6.display()
 snowBall7.display()
 snowBall8.display()
 snowBall9.display()
 snowBall10.display()
 snowBall11.display()
 snowBall12.display()
}
