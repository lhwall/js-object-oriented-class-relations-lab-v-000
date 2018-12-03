let driverID = 1
let passengerID = 1
let tripID = 1
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name){
    this.name = name
    this.id = driverID++

    store.drivers.push(this)
  }
}


class Passenger{
  constructor(name){
    this.name = name
    this.id = passengerID++

    store.passengers.push(this)
  }
}

class Trip{
  constructor(driver, passenger){
    this.driverID = driver.id
    this.passenger = passenger.id
    this.id = tripID++

    store.trips.push(this)
  }
}
