const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");
const Display = require('./display');
const { bindEventListeners } = require('./event_listeners');


document.addEventListener("DOMContentLoaded", () => {
  const stage = new createjs.Stage("canvas");
  const display = new Display(stage);

  display.drawOrbits();


  createjs.Ticker.addEventListener("tick", () => stage.update());


});
