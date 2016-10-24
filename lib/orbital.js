const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");
const Display = require('./display');


document.addEventListener("DOMContentLoaded", () => {
  // const stage = new createjs.Stage("canvas");
  const display = new Display();

  display.drawOrbits();


  


});
