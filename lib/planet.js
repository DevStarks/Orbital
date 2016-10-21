export class Planet {
  constructor({ stage, ring, color }) {
    this.stage = stage;
    this.ring = ring;
    this.color = color;
  }

  draw() {
    const planet = new createjs.Shape();
    planet.graphics.beginFill(this.color).drawCircle(0, 0, 7);

    let angle = 1.57;
    setInterval(() => {
      planet.x = this.ring.x + Math.cos(angle) * this.ring.radius;
      planet.y = this.ring.y + Math.sin(angle) * this.ring.radius;

      const degrees = (
        360 / ((this.ring.BPM / 60) * (this.ring.MEASURES * 4)) / 60
      );
      angle -= degrees * Math.PI / 180;
    }, 16.66666666);

    this.stage.addChild(planet);
  }
}
