class Drop{
  constructor(x, y){
      var options = { 
          'restitution':0.1,
          'friction':0.01
        }
        this.rain = Bodies.circle(x, y, 10, options);
        this.radius = 6;
        World.add(world, this.rain);
  }
 
  update(){
    if(this.rain.position.y > 460){
      Matter.Body.setPosition(this.rain,{x:random(300, 900), y:random(60, 450)});
    
    }
  
  }

  display(){
    strokeWeight(1);
    stroke("blue");
    fill("white");
    ellipseMode(CENTER);
    ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
  
  }


}