const { Planet } = require('./planet');
const CENTER_X = 365, CENTER_Y = 365;

export class OrbitRing {
  constructor({ stage, radius, color, BPM, MEASURES }) {
    this.stage = stage;
    this.color = color;
    this.x = CENTER_X;
    this.y = CENTER_Y;
    this.radius = radius;
    this.BPM = BPM;
    this.MEASURES = MEASURES;
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
      ring: this,
      color: this.color
    });
    this.button.draw();
  }
}


export class OrbitButton {
  constructor({ stage, ring, color }) {
    this.stage = stage;
    this.ring = ring;
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
      .drawCircle(this.ring.x, this.ring.y + this.ring.radius, 22);
    this.stage.addChild(this.buttonShape);
  }

  createPlanet() {
    const planet = new Planet({
      stage: this.stage,
      ring: this.ring,
      color: this.color
    });
    planet.draw();
  }
}
