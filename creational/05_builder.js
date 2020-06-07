class Shop {
  construct(builder) {
    builder.step1();
    builder.step2();

    return builder.get();
  }
}

class CarBuilder {
  constructor() {
    this.car = null;
  }

  step1() {
    this.car = new Car();
  }

  step2() {
    this.car.addParts();
  }

  get() {
    return this.car;
  }
}

class TruckBuilder {
  constructor() {
    this.truck = null;
  }

  step1() {
    this.truck = new Truck();
  }

  step2() {
    this.truck.addParts();
  }

  get() {
    return this.truck;
  }
}

class Car {
  constructor() {
    this.doors = 0;
  }

  addParts() {
    this.doors = 2;
  }

  info() {
    console.log(`I am a ${this.doors} - door Car.`)
  }
}

class Truck {
  constructor() {
    this.doors = 0;
  }

  addParts() {
    this.doors = 4;
  }

  info() {
    console.log(`I am a ${this.doors} - door Truck.`)
  }
}

function run() {
  const shop = new Shop();
  const carBuilder = new CarBuilder();
  const truckBuilder = new TruckBuilder();

  let car = shop.construct(carBuilder);
  let truck = shop.construct(truckBuilder);

  car.info();
  truck.info();
}

run();
/*
  I am a 2 - door Car.
  I am a 4 - door Truck.
 */


