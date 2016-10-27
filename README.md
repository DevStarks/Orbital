## Orbital

Orbital is a solar-system inspired musical instrument for the browser. It works by looping 1, 2, 4, or 8 measures and placing new notes, represented by planets, in orbit as the user inputs them. Each tone has its own orbital path and triggers a synth sound when it reaches its point of origin.

[Checkout the live version here!](http://www.devinstarks.com/Orbital)


![sign-up](./docs/screenshots/sign-up.jpg)

### Features

- Start, pause, and reset the orbit looper
- Select unlimited notes to add to the looper
<!-- - Toggle the arpeggiator to place a constant stream of planets into orbit in a selectable pattern -->
- Adjustable tempo and number of measures

### Technology Used

- JavaScript
- Tone.js
- EaselJS

## Main Feature Implementation

### Measure and tempo based orbit speed

Each planet orbits at a speed determined by two inputs, number of measures and tempo.
To achieve uniform revolution time for planets on orbits of different sizes I wrote an algorithm
that calculates the change of angle per frame given the two inputs. This angle determines the next coordinate along the orbit. The new location is calculated repeatedly at a 1/60 second interval allowing the planet constant movement along its respective orbit.

```javascript
let angle = 0;
setInterval(() => {
  planetShape.x = this.ring.x + Math.cos(angle) * this.ring.radius;
  planetShape.y = this.ring.y + Math.sin(angle) * this.ring.radius;

  const degrees = (
    360 / ((60 / this.ring.bpm) * (this.ring.measures * 4)) / 60
  );
  const radians = degrees * Math.PI / 180;

  angle -= radians;
}, 16.66666666);
```

### Visually driven note triggering

Because the frame rate in the browser is metronomically imperfect, it was necessary to trigger the synthesizer based on planet coordinates as opposed to at a pre-determined interval. This ensures that the visualization and the audio maintain synchronicity.

```javascript
handleOriginArrival(planetShape) {
  if (planetShape.x > this.ring.x - 10 &&
      planetShape.x < this.ring.x + 5 &&
      planetShape.y > this.ring.y) {
    this.synth.triggerAttackRelease(this.ring.note, '8n');
  }
}
```
