export class Planet {
  constructor({ stage, ringX, ringY, ringRadius, color }) {
    this.stage = stage;
    this.ringX = ringX;
    this.ringY = ringY;
    this.ringRadius = ringRadius;
    this.color = color;
  }

  draw() {
    const planet = new createjs.Shape();
    planet.graphics
      .beginFill(this.color)
      .drawCircle(0, 0, 7);

    this.stage.addChild(planet);

    let angle = 1.57;
    const rotate = () => {
      requestAnimationFrame(rotate);

      planet.x = 365 + Math.cos(angle) * this.ringRadius;
      planet.y = 365 + Math.sin(angle) * this.ringRadius;
      angle -= .1;

    };
    rotate();
  }
}
