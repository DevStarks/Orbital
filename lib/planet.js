const Tone = require("tone");
const pauseable = require("pauseable");


export class PlanetFactory {
  constructor({ stage, ring, color, button }) {
    this.stage = stage;
    this.ring = ring;
    this.color = color;
    this.button = button;
    this.synth = this.createSynth();
  }

  createPlanet() {
    const planetShape = new createjs.Shape();
    planetShape.graphics.beginFill(this.color).drawCircle(0, 0, 7);

    let angle = 1.57;
    const movePlanet = pauseable.setInterval(() => {
      this.handleOriginArrival(planetShape);

      planetShape.x = this.ring.x + Math.cos(angle) * this.ring.radius;
      planetShape.y = this.ring.y + Math.sin(angle) * this.ring.radius;

      const degrees = (
        360 / ((60 / this.ring.bpm) * (this.ring.measures * 4)) / 60
      );

      angle -= degrees * Math.PI / 180;
    }, 16.66666666);


    this.ring.planetIntervals.add(movePlanet);
    this.stage.addChild(planetShape);
    this.ring.addPlanet(planetShape);
  }


  createSynth() {
    const synth = new Tone.MonoSynth({
      "oscillator" : {
        "type" : "triangle"
      },
      "envelope" : {
        "attack" : 0.1
      }
    }).toMaster();
    return synth;
  }

  handleOriginArrival(planetShape) {
    if (planetShape.x > this.ring.x - 10 &&
        planetShape.x < this.ring.x + 5 &&
        planetShape.y > this.ring.y) {
      const triggerSynth = setTimeout(() => {
        this.synth.triggerAttackRelease(this.ring.note, '8n');
      }, 5);

      const triggerButtonExpand = setTimeout(() => {
        clearTimeout(triggerButtonExpand);
        this.button.expand();
        setTimeout(() => this.button.setOrigShape(), 100);
      });
    }
  }
}
