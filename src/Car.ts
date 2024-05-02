class Car implements ICar {
  constructor(public engine, public color) {}

  brake() {
    console.log("Braking...");
  }
}
