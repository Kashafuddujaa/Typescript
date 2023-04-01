var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    Object.defineProperty(Vehicle.prototype, "make", {
        get: function () {
            return this._make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "rented", {
        get: function () {
            return this._rented;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.rent = function (rentalDays, rentalID) {
        this._rented = true;
        console.log("The ".concat(this._make, " ").concat(this._model, " has been rented for ").concat(rentalDays, " days with rental ID ").concat(rentalID, "."));
    };
    Vehicle.prototype.return = function (returnMileage) {
        this._rented = false;
        var rentalDays = 7;
        var rentalRecord = { rentalDays: rentalDays, returnMileage: returnMileage };
        console.log("The ".concat(this._make, " ").concat(this._model, " has been returned with ").concat(rentalDays, " rental days and ").concat(returnMileage, " return mileage."));
        return rentalRecord;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, numSeats, numDoors) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._numSeats = numSeats;
        _this._numDoors = numDoors;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 50;
    };
    return Car;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, engineSize) {
        var _this = _super.call(this, make, model, year, false) || this;
        _this._engineSize = engineSize;
        return _this;
    }
    Object.defineProperty(Motorcycle.prototype, "engineSize", {
        get: function () {
            return this._engineSize;
        },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.rentalRate = function () {
        return 40;
    };
    return Motorcycle;
}(Vehicle));
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(make, model, year, rented, cargoCapacity) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this._cargoCapacity = cargoCapacity;
        return _this;
    }
    Object.defineProperty(truck.prototype, "cargoCapacity", {
        get: function () {
            return this._cargoCapacity;
        },
        enumerable: false,
        configurable: true
    });
    truck.prototype.rentalRate = function () {
        return 75;
    };
    truck.prototype.loadCargo = function () {
        return "You are now loading cargo in the ".concat(this.make, " ").concat(this.model, " with a capacity of ").concat(this.cargoCapacity, " pounds.");
    };
    return truck;
}(Vehicle));
var car1 = new Car("Toyota", "Corolla", 2019, false, 5, 4);
var Motorcycle1 = new Motorcycle("Honda", "CBR1000RR", 2022, false, 1000);
// create new car object with different parameters
var Car2 = new Car("Tesla", "Model S", 2023, false, 5, 4);
var rentBtn = document.getElementById("rent-btn");
// const rentBtn = document.getElementById("rent-btn")!;
rentBtn.addEventListener("click", function () {
    handleRentButtonClick(car1);
});
function handleRentButtonClick(car) {
    console.log("handleRentButtonClick called");
    var rentalDays = parseInt(document.getElementById("rental-period").value);
    var rentalID = parseInt(document.getElementById("rental-id").value);
    if (car.rented) {
        console.log("This car is already rented.");
    }
    else {
        car.rent(rentalDays, rentalID);
        console.log("The car has been rented for ".concat(rentalDays, " days with rental ID ").concat(rentalID, "."));
    }
}
var returnBtn = document.getElementById("return-btn");
returnBtn.addEventListener("click", function () {
    handleReturnButtonClick(car1);
});
function handleReturnButtonClick(car) {
    var returnMileage = parseInt(document.getElementById("return-mileage").value);
    if (!car.rented) {
        console.log("This car is not rented.");
    }
    else {
        var rentalRecord = car.return(returnMileage);
        console.log("The car has been returned with ".concat(rentalRecord.rentalDays, " rental days and ").concat(rentalRecord.returnMileage, " return mileage."));
    }
}
// existing code
// const myCar1 = new Car("Toyota", "Corolla", 2021, false, 5, 4);
