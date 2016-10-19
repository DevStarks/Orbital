export const Planet = function(ringX, ringY, ringRadius) {
  const planet = new createjs.Shape();
  planet.graphics
    .beginFill("white")
    .drawCircle(0, 0, 5);


  return planet;
};
