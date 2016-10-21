const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");
const Display = require('./display');
const NOTES = ["A", "C", "D", "E", "A2"];
const NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];
const CENTER_X = 365, CENTER_Y = 365;



document.addEventListener("DOMContentLoaded", () => {
  const stage = new createjs.Stage("canvas");
  const display = new Display(stage);

  display.drawOrbits();

  // createjs.Ticker.addEventListener("tick", stage.update());

  stage.update(); 
});
