const { OrbitRing, OrbitButton } = require("./orbit.js");
const { Planet } = require("./planet.js");

const NOTES = ["A", "C", "D", "E", "A2"];

const NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];

document.addEventListener("DOMContentLoaded", () => {
  const stage = new createjs.Stage("canvas");

  drawOrbits(stage);

  drawPlanets(stage);

  stage.update();
});

const drawOrbits = (stage) => {
  let radius = 90;
  NOTES.forEach( (note, i) => {
    const color = NOTE_COLORS[i]
    stage.addChild(new OrbitRing(365, 365, radius));
    stage.addChild(new OrbitButton(365, 365, radius, color));
    radius += 50;
  });
};

const drawPlanets = (stage) => {
  const ringX = 365;
  const ringY = 365;
  const ringRadius = 90;

  const planet = new Planet(ringX, ringY, ringRadius)
  stage.addChild(planet);

  let angle = 0;
  const draw = () => {
    requestAnimationFrame(draw);

    planet.x = 365 + Math.cos(angle) * ringRadius;
    planet.y = 365 + Math.sin(angle) * ringRadius;
    // console.log(angle);
    stage.update();
    angle -= .1;
  };
  draw();
};

// const movePlanet(planet) => {
//
// }
