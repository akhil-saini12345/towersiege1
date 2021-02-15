class ground {
cunstructor(x,y,){
var options = {
//isStatic:true
}

this.ground = bodies.rectangle(650,390,800,20,options);
World.add(world,this.ground);
}

display(){

strokeweight(2);
fill("white");
rectMode(CENTER)
rect(this.ground.position.x,this.ground.position.y,800,20)



 }
}