const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");

const NOTES = ["A3", "E2", "D2", "C2", "A2"];
const NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];


export class Display {

  constructor(stage) {
    this.stage = stage;
    this.planets = [];
    this.rings = [];
    this.bpm = 72;
    this.measures = 1;

    this.bindEventListeners();
  }

  drawOrbits() {
    let radius = 80;

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

      radius += 55;
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

  planetIntervals() {
    return this.rings.map( ring => {
      return ring.planetIntervals;
    });
  }

  bindEventListeners() {
    const display = this;

    $('.action #record').on('click', function(e) {
      e.preventDefault();
      if ($(this).html() === 'Play') {
        $(this).html('Pause');
        display.planetIntervals().forEach( int => int.resume());
      } else if ($(this).html() === 'Pause') {
        $(this).html('Play');
        display.planetIntervals().forEach( int => int.pause());
      }
    });

    $('.action #reset').on('click', function(e){
      e.preventDefault();
      display.stage.removeAllChildren();
      display.planetIntervals().forEach( int => int.clear());
      display.drawOrbits();
    });
  }
}
