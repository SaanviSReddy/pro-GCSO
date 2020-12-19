class Box{
    constructer(){
        var option={restitution:1}
        this.body=Bodies.rectangle(200,100,50,50,option);
        World.add(world,this.body);
        console.log(this.body);
    }
    display(){
        
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
