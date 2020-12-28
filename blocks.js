class blocks   {
    constructor(x,y,w,h)   {
        this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.body);
        this.width=w;
        this.height=h;
    }
    display()   {
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}