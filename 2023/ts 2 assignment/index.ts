class Vehicle {
  private _make: string;
  private _model: string;
  private _year: number;
  private _rented: boolean;

  constructor(make: string, model: string, year: number, rented: boolean) {
    this._make = make;
    this._model = model;
    this._year = year;
    this._rented = rented;
  }

  public get make(): string {
    return this._make;
  }

  public get model(): string {
    return this._model;
  }

  public get year(): number {
    return this._year;
  }

  public get rented(): boolean {
    return this._rented;
  }

  public rent(rentalDays: number, rentalID: number): void {
    this._rented = true;
    console.log(`The ${this._make} ${this._model} has been rented for ${rentalDays} days with rental ID ${rentalID}.`);
  }

  public return(returnMileage: number): RentalRecord {
    this._rented = false;
    const rentalDays = 7;
    const rentalRecord: RentalRecord = { rentalDays, returnMileage };
    console.log(`The ${this._make} ${this._model} has been returned with ${rentalDays} rental days and ${returnMileage} return mileage.`);
    return rentalRecord;
  }
}

interface RentalRecord {
  rentalDays: number;
  returnMileage: number;
}

class Car extends Vehicle {
  private _numSeats: number;
  private _numDoors: number;

  constructor(make: string, model: string, year: number, rented: boolean, numSeats: number, numDoors: number) {
    super(make, model, year, rented);
    this._numSeats = numSeats;
    this._numDoors = numDoors;
  }

  public rentalRate(): number {
    return 50;
  }
}
class Motorcycle extends Vehicle {
  private _engineSize: number;

  constructor(make: string, model: string, year: number, engineSize: number) {
    super(make, model, year, false);
    this._engineSize = engineSize;
  }

  get engineSize(): number {
    return this._engineSize;
  }

  rentalRate(): number {
    return 40;
  }
}


class truck extends Vehicle {
  private _cargoCapacity: number;

  constructor(make: string, model: string, year: number, rented: boolean,  cargoCapacity: number) {
    super(make, model, year, rented);
    this._cargoCapacity = cargoCapacity;
  }

  get cargoCapacity(): number {
    return this._cargoCapacity;
  }

  rentalRate(): number {
    return 75;
  }

  loadCargo(): string {
    return `You are now loading cargo in the ${this.make} ${this.model} with a capacity of ${this.cargoCapacity} pounds.`;
  }
}






const car1 = new Car("Toyota", "Corolla", 2019, false, 5, 4);
const Motorcycle1 = new Motorcycle("Honda", "CBR1000RR", 2022, false, 1000);


// create new car object with different parameters
const Car2 = new Car("Tesla", "Model S", 2023, false, 5, 4);


const rentBtn = document.getElementById("rent-btn")!;

// const rentBtn = document.getElementById("rent-btn")!;
rentBtn.addEventListener("click", function() {
  handleRentButtonClick(car1);
});

function handleRentButtonClick(car: Car) {
  console.log("handleRentButtonClick called");
  const rentalDays = parseInt((<HTMLInputElement>document.getElementById("rental-period")).value);
  const rentalID = parseInt((<HTMLInputElement>document.getElementById("rental-id")).value);
  
  if (car.rented) {
    console.log("This car is already rented.");
  } else {
    car.rent(rentalDays, rentalID);
    console.log(`The car has been rented for ${rentalDays} days with rental ID ${rentalID}.`);
  }
}




const returnBtn = document.getElementById("return-btn")!;
returnBtn.addEventListener("click", function() {
  handleReturnButtonClick(car1);
});

function handleReturnButtonClick(car: Car): void {
  const returnMileage = parseInt((<HTMLInputElement>document.getElementById("return-mileage")).value);
  
  if (!car.rented) {
    console.log("This car is not rented.");
  } else {
    const rentalRecord = car.return(returnMileage);
    console.log(`The car has been returned with ${rentalRecord.rentalDays} rental days and ${rentalRecord.returnMileage} return mileage.`);
  }
}












