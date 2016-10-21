const CENTER_X = 365, CENTER_Y = 365;


export class OrbitRing {
  constructor(stage, radius, color) {
    this.stage = stage
    this.x = CENTER_X;
    this.y = CENTER_Y;
    this.radius = radius;
    this.button = new OrbitButton(stage, radius, color);
  }

  draw() {
    const ring = new createjs.Shape();
    ring.graphics
      .setStrokeStyle(2)
      .beginStroke("DeepSkyBlue")
      .drawCircle(this.x, this.y, this.radius);

    this.stage.addChild(ring);
    this.button.draw();
  }
}


export class OrbitButton {
  constructor(stage, ringRadius, color) {
    this.stage = stage;
    this.ringX = CENTER_X;
    this.ringY = CENTER_Y;
    this.ringRadius = ringRadius;
    this.color = color;
  }

  draw() {
    const button = new createjs.Shape();
    button.graphics
      .beginFill(this.color)
      .beginStroke("black")
      .setStrokeStyle(2)
      .drawCircle(this.ringX, this.ringY + this.ringRadius, 22);
    this.stage.addChild(button);
  }
}
