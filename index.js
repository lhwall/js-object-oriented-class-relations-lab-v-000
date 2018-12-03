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

  trips(){
    return store.trips.filter(
      function(item){
        return item.driverId === this.id
      }.bind(this)
    )
  }

 passengers(){
  let driverPassengers = []
    for (let i = 0; i < this.trips().length; i++){
      if (!driverPassengers.includes(this.trips()[i].passenger()) ){

        driverPassengers.push(this.trips()[i].passenger())
      }
    }
 return driverPassengers
}
}


class Passenger{
  constructor(name){
    this.name = name
    this.id = passengerID++

    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(item){
        return item.passengerId === this.id
      }.bind(this)
    )
  }

  drivers(){
   let passengerDrivers = []
     for (let i = 0; i < this.trips().length; i++){
       if (!passengerDrivers.includes(this.trips()[i].driver()) ){

         passengerDrivers.push(this.trips()[i].driver())
       }
     }
  return passengerDrivers
 }
}

class Trip{
  constructor(driver, passenger){
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = tripID++

    store.trips.push(this)
  }

passenger(){
  return store.passengers.find(
    function(passenger){
      return passenger.id === this.passengerId
    }.bind(this)
  )
}

driver(){
  return store.drivers.find(
    function(driver){
      return driver.id === this.driverId
    }.bind(this)
  )
}

}
