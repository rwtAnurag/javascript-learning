

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}


// prototype inheritance

Car.prototype.accelerate = function (){
    this.speed += 10;
    console.log(this.make + "is going at " + this.speed + "km/h")
}

Car.prototype.break = function (){
    this.speed -= 5;
    console.log(this.make + "is going at " + this.speed + "km/h")
}

const bmw = new Car("bmw",280)
const mercedes = new Car("mercedes", 310) 

console.log(bmw)
console.log(mercedes)

bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.break()