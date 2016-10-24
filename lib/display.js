const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");

const NOTES = ["A3", "E2", "D2", "C2", "A2"];
const NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];


export class Display {

  constructor(stage) {
    this.stage = stage;
    this.planets = [];
    this.bindEventListeners();
  }

  drawOrbits() {
    let radius = 90;

    for (var i = 0; i < NOTES.length; i++) {
      const note = NOTES[i];
      const color = NOTE_COLORS[i];
      const orbitRing = new OrbitRing({
        display: this,
        stage: this.stage,
        bpm: parseInt($('.tempo input').attr('value')),
        measures: parseInt($('.measures .selected').attr('value')),
        radius,
        color,
        note
      });
      orbitRing.draw();

      radius += 65;
    }
  }

  addPlanet(planet) {
    console.log(this.planets);
    this.planets.push(planet);
  }

  bindEventListeners() {
    const display = this;

    $('.measures').on('click', 'button', function(e) {
      e.preventDefault();
      $('button.selected').toggleClass('selected');
      $(this).toggleClass('selected');
      display.measures = parseInt(this.value);
    });


    $('.tempo input').on('change', function() {
      display.BPM = parseInt(this.value);
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
