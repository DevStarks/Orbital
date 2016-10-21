const { Planet } = require('./planet');
const CENTER_X = 365, CENTER_Y = 365;

export class OrbitRing {
  constructor({ stage, radius, color }) {
    this.stage = stage;
    this.color = color;
    this.x = CENTER_X;
    this.y = CENTER_Y;
    this.radius = radius;
  }

  draw() {
    const ring = new createjs.Shape();
    ring.graphics
      .setStrokeStyle(2)
      .beginStroke("DeepSkyBlue")
      .drawCircle(this.x, this.y, this.radius);
    this.stage.addChild(ring);
    this.createButton();
    this.rotatePlanets();
  }

  rotatePlanets() {
    createjs.Ticker.addEventListener("tick", () => this.stage.update());
  }

  createButton() {
    this.button = new OrbitButton({
      stage: this.stage,
      ringRadius: this.radius,
      color: this.color
    });
    this.button.draw();
  }
}


export class OrbitButton {
  constructor({ stage, ringRadius, color }) {
    this.stage = stage;
    this.ringX = CENTER_X;
    this.ringY = CENTER_Y;
    this.ringRadius = ringRadius;
    this.color = color;
  }

  draw() {
    this.createButton();
    this.buttonShape.on('click', () => { this.createPlanet(); });
  }

  createButton() {
    this.buttonShape = new createjs.Shape();
    this.buttonShape.graphics
      .beginFill(this.color)
      .beginStroke("black")
      .setStrokeStyle(2)
      .drawCircle(this.ringX, this.ringY + this.ringRadius, 22);
    this.stage.addChild(this.buttonShape);
  }

  createPlanet() {
    const planet = new Planet({
      stage: this.stage,
      ringX: this.ringX,
      ringY: this.ringY,
      ringRadius: this.ringRadius,
      color: this.color
    });
    planet.draw();
  }
}
