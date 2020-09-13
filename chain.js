class chain{
    constructor(bodyA,bodyB,x,y){
        this.x= x; 
        this.y=y;
     var options={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.x,y:this.y},
    stiffness:0.8,
    lenght:200}
    this.chain= Constraint.create(options);
    World.add(world,this.chain);
    }
    display(){
    var posA = this.chain. bodyA.position;
    var posB =  this.chain.bodyB.position;
    line (posA.x,posA.y,posB.x,posB.y);
    }
    }
