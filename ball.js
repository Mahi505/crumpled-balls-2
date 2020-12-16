class Ball{
constructor(x,y){
 var options={
 restitution:0.5,
 friction:0.8,
 density:0.2
 }   

 this.image=loadImage("p.png")
 this.body=Bodies.circle(x,y,20,options)
 World.add(world,this.body)


}
display(){
var pos=this.body.position
push()
// ellipseMode(RADIUS)
// ellipse(pos.x,pos.y,20)

imageMode(RADIUS)
image(this.image,pos.x,pos.y,20,20)
pop()    
}
}
















