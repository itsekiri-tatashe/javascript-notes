class Car {
    // Constructor to initialize properties
    constructor(make, model, year, color) {
      this.make = make; // Manufacturer of the car
      this.model = model; // Model of the car
      this.year = year; // Year of manufacture
      this.color = color; // Color of the car
      this.isStarted = false; // Initially, the car is not started
    }
  
    // Method to start the car
    start() {
      // if car hasn't started
      if (!this.isStarted) {
        this.isStarted = true;
        console.log(`The ${this.color} ${this.year} ${this.make} ${this.model} is now started.`);
      // if the car is on already
      } else {
        console.log("The car is already running.");
      }
    }
  
    // Method to stop the car
    stop() {
      if (this.isStarted) {
        this.isStarted = false;
        console.log(`The ${this.color} ${this.year} ${this.make} ${this.model} is now turned off.`);
      } else {
        console.log("The car is already off.");
      }
    }
  
    // Method to change the color of the car
    repaint(newColor) {
      const oldColor = this.color;
      this.color = newColor;
      console.log(`The car has been repainted from ${oldColor} to ${newColor}.`);
    }
  }
  
  // Creating an instance (object) of the Car class
  const myCar = new Car("Toyota", "Corolla", 2021, "Blue");
  
  // Interacting with the Car object
  console.log(`My car details: ${myCar.make} ${myCar.model}, Year: ${myCar.year}, Color: ${myCar.color}`);
  myCar.start();
  myCar.repaint("Red");
  myCar.stop();
  