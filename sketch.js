const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,World
var ground;
var polygon,polygonImage;
var slingShot;
var stand1,stand2;
var block
function preload(){
//polygonImage = loadImage("polygon.png")
}
function setup(){
engine = Engine.create();
world = engine.world;

createCanvas(800,500);

ground = new Ground();

stand1 = new stand(380,300,270,10);
stand2 = new stand(700,200,200,10);

//base blocks
block1 = new block(20,20,20,20);
block1.color = "brown"
block2 = new block(20,20,20,20);
block2.color = "brown"
block3 = new block(20,20,20,20);
block3.color = "brown"
block4 = new block(20,20,20,20);
block4.color = "brown"
block5 = new block(20,20,20,20);
block5.color = "brown"
block6 = new block(20,20,20,20);
block6.color = "brown"
block7 = new block(20,20,20,20);
block7.color = "brown"
block8 = new block(20,20,20,20);
block8.color = "brown"
block9 = new block(20,20,20,20);
block9.color = "brown"
block10 = new block(20,20,20,20);
block10.color = "brown"

//second level blocks
block11 = new block(20,20,20,20);
block11.color = "yellow"
block12 = new block(20,20,20,20);
block12.color = "yellow"
block13 = new block(20,20,20,20);
block13.color = "yellow"
block14 = new block(20,20,20,20);
block14.color = "yellow"
block15 = new block(20,20,20,20);
block15.color = "yellow"
block16 = new block(20,20,20,20);
block16.color = "yellow"
block17 = new block(20,20,20,20);
block17.color = "yellow"
block18 = new block(20,20,20,20);
block18.color = "yellow"

//third level blocks
block19 = new block(20,20,20,20);
block19.color = "red"
block20 = new block(20,20,20,20);
block20.color = "red"
block21 = new block(20,20,20,20);
block21.color = "brown"
block22 = new block(20,20,20,20);
block22.color = "red"
block23 = new block(20,20,20,20);
block23.color = "red"
block24 = new block(20,20,20,20);
block24.color = "red"

//fourth level blocks
block25 = new block(20,20,20,20);
block25.color = "blue"
block26 = new block(20,20,20,20);
block26.color = "blue"
block27 = new block(20,20,20,20);
block27.color = "blue"
block28 = new block(20,20,20,20);
block28.color = "blue"

//top blocks
block29 = new block(20,20,20,20);
block29.color = "green"
block30 = new block(20,20,20,20);
block30.color = "green"

//base blocks
block31 = new block(20,20,20,20);
block31.color = "brown"
block32 = new block(20,20,20,20);
block32.color = "brown"
block33 = new block(20,20,20,20);
block33.color = "brown"
block34 = new block(20,20,20,20);
block34.color = "brown"
block35 = new block(20,20,20,20);
block35.color = "brown"
block36 = new block(20,20,20,20);
block36.color = "brown"
block37 = new block(20,20,20,20);
block37.color = "brown"
block38 = new block(20,20,20,20);
block38.color = "brown"
block39 = new block(20,20,20,20);
block39.color = "brown"
block40 = new block(20,20,20,20);
block40.color = "brown"

//second level blocks
block41 = new block(20,20,20,20);
block41.color = "yellow"
block42 = new block(20,20,20,20);
block42.color = "yellow"
block43 = new block(20,20,20,20);
block43.color = "yellow"
block44 = new block(20,20,20,20);
block44.color = "yellow"
block45 = new block(20,20,20,20);
block45.color = "yellow"
block46 = new block(20,20,20,20);
block46.color = "yellow"
block47 = new block(20,20,20,20);
block47.color = "yellow"
block48 = new block(20,20,20,20);
block48.color = "yellow"

//third level blocks
block49 = new block(20,20,20,20);
block49.color = "red"
block50 = new block(20,20,20,20);
block50.color = "red"
block51 = new block(20,20,20,20);
block51.color = "brown"
block52 = new block(20,20,20,20);
block52.color = "red"
block53 = new block(20,20,20,20);
block53.color = "red"
block54 = new block(20,20,20,20);
block54.color = "red"

//fourth level blocks
block55 = new block(20,20,20,20);
block55.color = "blue"
block56 = new block(20,20,20,20);
block66.color = "blue"
block57 = new block(20,20,20,20);
block57.color = "blue"
block58 = new block(20,20,20,20);
block58.color = "blue"

//top blocks
block59 = new block(20,20,20,20);
block59.color = "green"
block60 = new block(20,20,20,20);
block60.color = "green"

slingShot = new slingShot(this.polygon,{x:200,y:200});
World.add(world,polygon);

polygon = bodies.hexagon(30,30,30,30,30,30);
polygon.color = "peach"


}
function draw(){
Background("black")

Engine.update(engine);

ground.display();
strokeweight(5);
stroke(10);

stand1.display();
stand2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
block31.display();
block32.display();
block33.display();
block34.display();
block35.display();
block36.display();
block37.display();
block38.display();
block39.display();
block40.display();
block41.display();
block42.display();
block43.display();
block44.display();
block45.display();
block46.display();
block47.display();
block48.display();
block49.display();
block50.display();
block51.display();
block52.display();
block53.display();
block54.display();
block55.display();
block56.display();
block57.display();
block58.display();
block59.display();
block60.display();

Text("aim the boxes with the ball and shoot to topple them down ",100,100)

slingShot.display

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingShot.fly();
 }
}