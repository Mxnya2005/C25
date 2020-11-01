class Pig{
    constructor(x,y)
    {
        var options={
            restitution:0.5,
            
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(gameworld,this.body);
    }

    display()
    {
        var angle= this.body.angle
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (angle)
        strokeWeight(3)
        stroke("darkgreen");
        fill ("green")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop (); 
    }
}