class Plinko {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y,r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

      
        fill("white");
        rectMode(RADIUS);
        circle(pos.x,pos.y,17);
      
    }

}