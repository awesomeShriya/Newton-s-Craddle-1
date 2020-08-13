class Bob {
    constructor(x, y, r) {
      var options = {
          'isStatic':false,
          'restitution':1,
          'friction':0,
          'density':0.8
      }
      this.body = Bodies.circle(x, y,r, options);
      this.r = r;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("pink");
      ellipse(0,0, this.r);
      pop();
    }
  };