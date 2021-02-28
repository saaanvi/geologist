class Stone {
    constructor(x, y,r) {
      var options = {
        
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,r, options);
      this.radius =r;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };