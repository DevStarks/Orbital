const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");

const NOTES = ["A3", "E2", "D2", "C2", "A2"];
const NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];


export class Display {

  constructor(stage) {
    this.stage = new createjs.Stage("canvas");
    this.planets = [];
    this.rings = [];
    this.bindEventListeners();
    this.bpm = 72;
    this.measures = 1;
  }

  drawOrbits() {
    let radius = 90;

    for (var i = 0; i < NOTES.length; i++) {
      const note = NOTES[i];
      const color = NOTE_COLORS[i];
      const orbitRing = new OrbitRing({
        display: this,
        stage: this.stage,
        bpm: this.bpm,
        measures: this.measures,
        radius,
        color,
        note
      });
      orbitRing.draw();
      this.rings.push(orbitRing);

      radius += 65;
    }
    this.setTicker();
  }

setTicker() {
  createjs.Ticker.addEventListener("tick", () => {
    this.stage.update();
  });
}

  addPlanet(planet) {
    this.planets.push(planet);
  }

  bindEventListeners() {
    const display = this;

    $('.measures').on('click', 'button', function(e) {
      e.preventDefault();
      $('button.selected').toggleClass('selected');
      $(this).toggleClass('selected');
      display.measures = parseInt(this.value);

      display.rings.forEach( ring => {
        ring.measures = parseInt(this.value);
      });
    });


    $('.tempo input').on('change', function() {
      display.bpm = parseInt(this.value);

      display.rings.forEach( ring => {
        ring.bpm = parseInt(this.value);
      });
    });

    $('.action #record').on('click', function(e) {
      e.preventDefault();
      if (this.html === 'Record') {
        $(this).html('Pause');
      } else if (this.html === 'Pause') {
        $(this).html('Resume');
      } else {
        $(this).html('Pause');
      }
    });
  }

}

module.exports = Display;
