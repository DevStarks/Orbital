const { PlanetFactory } = require('./planet');
const pauseable = require("pauseable");

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
    this.planetIntervals = pauseable.createGroup();

    this.bindEventListeners();
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

  bindEventListeners() {
    const ring = this;

    $('.measures').on('click', 'button', function(e) {
      e.preventDefault();
      $('button.selected').toggleClass('selected');
      $(this).toggleClass('selected');

      ring.measures = parseInt(this.value);
    });

    $('.tempo input').on('change', function(e) {
      e.preventDefault();

      ring.bpm = parseInt(this.value);
    });
  }
}


export class OrbitButton {
  constructor({ stage, ring, color }) {
    this.stage = stage;
    this.ring = ring;
    this.color = color;

  }

  draw() {
    this.buttonShape = new createjs.Shape();
    this.buttonShape.graphics
      .beginFill(this.color)
      .beginStroke("black")
      .setStrokeStyle(2)
      .drawCircle(this.ring.x, this.ring.y + this.ring.radius, 22);
    this.stage.addChild(this.buttonShape);

    this.bindEventListeners();

    this.stage.enableMouseOver(10);
    this.buttonShape.cursor = "pointer";
  }

  createPlanetFactory() {
    const planetFactory = new PlanetFactory({
      stage: this.stage,
      ring: this.ring,
      color: this.color,
      button: this
    });
    return planetFactory;
  }

  createPlanet() {
    if (!this.planetFactory) {
      this.planetFactory = this.createPlanetFactory();
    }
    this.planetFactory.createPlanet();
  }

  expand() {
    this.buttonShape.graphics
      .clear()
      .beginFill(this.color)
      .beginStroke("black")
      .setStrokeStyle(1)
      .drawCircle(this.ring.x, this.ring.y + this.ring.radius, 24);

    this.stage.addChild(this.buttonShape);
  }

  setOrigShape() {
    this.buttonShape.graphics
      .clear()
      .beginFill(this.color)
      .beginStroke("black")
      .setStrokeStyle(2)
      .drawCircle(this.ring.x, this.ring.y + this.ring.radius, 22);
    this.stage.addChild(this.buttonShape);
  }

  bindEventListeners() {
    this.buttonShape.on('click', () => {
      this.createPlanet();

      if ($('.action #record').html() === "Play") {
        $('.action #record').trigger('click');
      }
    });

    const button = this;
    this.buttonShape.on('mouseover', () => {
      this.expand();
    });

    this.buttonShape.on('mouseout', () => {
      this.setOrigShape();
    });

  }
}
