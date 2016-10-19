
export const OrbitRing = function(x, y, radius) {
  const orbit = new createjs.Shape();
  orbit.graphics
    .setStrokeStyle(2)
    .beginStroke("DeepSkyBlue")
    .drawCircle(x, y, radius);
  return orbit;
};

export const OrbitButton = function(ringX, ringY, ringRadius, color) {
  const button = new createjs.Shape();
  button.graphics
    .beginFill(color)
    .beginStroke("black")
    .setStrokeStyle(2)
    .drawCircle(ringX, ringY + ringRadius, 22);
  return button;
};
