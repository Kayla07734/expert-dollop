class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(
      this.x,
      this.y,
      this.height,
      this.width,
    );

    this.x=x
    this.y=y
    this.height = height
    this.width = width
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
