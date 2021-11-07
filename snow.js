class Snow {
    constructor(x, y, w, h) {
      var snow_features = {
        isStatic: false,
        restitution: 0.8,
        friction: 2
  
      };
    this.snowImage=loadImage("snow4.webp")
      this.snow = Bodies.rectangle(x, y, w, h, snow_features);
      World.add(myWorld, this.snow);
      this.w = w;
      this.h = h;
    }
    display() {
      push();
      translate(this.snow.position.x, this.snow.position.y);
      rotate(this.snow.angle);
      imageMode(CENTER);
      image(this.snowImage,0, 0, this.w, this.h);
      pop();
    }
  }
  