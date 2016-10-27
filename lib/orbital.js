const { Display } = require('./display');

const setupDisplay = () => {
  const stage = new createjs.Stage("canvas");
  const display = new Display(stage);
  display.drawOrbits();
};

document.addEventListener("DOMContentLoaded", () => {
  setupDisplay();
});
