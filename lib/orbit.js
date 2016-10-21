const { PlanetFactory } = require('./planet');
const CENTER_X = 365, CENTER_Y = 365;

export class OrbitRing {
  constructor({ stage, radius, color, note, bpm, measures, display }) {
    this.stage = stage;
    this.color = color;
    this.x = CENTER_X;
    this.y = CENTER_Y;
    this.radius = radius;
    this.note = note;
    this.bpm = bpm;
    this.measures = measures;
    this.display = display;
  }

  draw() {
    const ring = new createjs.Shape();
    ring.graphics
      .setStrokeStyle(2)
      .beginStroke("DeepSkyBlue")
      .drawCircle(this.x, this.y, this.radius);
    this.stage.addChild(ring);
    this.createButton();
  }

  addPlanet(planet) {
    this.display.addPlanet(planet);
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
    this.planetFactory = this.createPlanetFactory();
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

  createPlanetFactory() {
    const planetFactory = new PlanetFactory({
      stage: this.stage,
      ring: this.ring,
      color: this.color
    });
    return planetFactory;
  }

  createPlanet() {
    this.planetFactory.draw();
  }
}
