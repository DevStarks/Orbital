const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");


const NOTES = ["A", "C", "D", "E", "A2"];
const NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];
const BPM = 160;
const MEASURES = 1;

export class Display {

  constructor(stage) {
    this.stage = stage;
  }

  drawOrbits() {
    let radius = 90;

    for (var i = 0; i < NOTES.length; i++) {
      // const note = NOTES[i];
      const color = NOTE_COLORS[i];

      const orbitRing = new OrbitRing({
        stage: this.stage,
        BPM,
        MEASURES,
        radius,
        color
      });
      orbitRing.draw();

      radius += 50;
    }
  }
}

module.exports = Display;
