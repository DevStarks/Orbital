export class Planet {
  constructor(stage, color) {
    this.stage = stage;
    this.color = color;
  }

  draw() {
    const ringRadius = 90;
    const planet = new createjs.Shape();
    planet.graphics
      .beginFill("white")
      .drawCircle(0, 0, 5);
    this.stage.addChild(planet);

    let angle = 1.57;
    const rotate = () => {
      requestAnimationFrame(rotate);

      planet.x = 365 + Math.cos(angle) * ringRadius;
      planet.y = 365 + Math.sin(angle) * ringRadius;
      angle -= .1;

      this.stage.update();
    };
    rotate();
  }
}
