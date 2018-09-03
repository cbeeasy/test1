class Car {
  constructor () {
    this.wheels = 4
    this.type = 'aaa'
  }
}

class Ford extends Car {
  constructor () {
    super()
    this.windows = 5
  }
}

const car = new Car()
const ford = new Ford()

console.log(car.type)
console.log(ford.wheels)
console.log(ford.windows)
