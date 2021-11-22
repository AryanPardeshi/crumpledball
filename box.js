class Box {
    constructor(x,y,width,height) {

        var options= {
           isStatic:true,
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
display() {
    rectMode(CENTER)
    fill(rgb(255,0,0))
    rect(this.y,this.x,this.width,this.height);
}
};
