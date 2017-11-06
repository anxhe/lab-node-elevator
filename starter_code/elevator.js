class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = []
  }

  start() {
    this.interval = setInterval(()=> this.update(), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log()
  }

  _passengersEnter() {
   this.waitingList.forEach((person) =>  {
     if (person.originFloor == this.floor){
       let index = this.waitingList.indexOf(person);
       let  passenger = this.waitingList.splice(index,1)[0];
       this.passengers.push(passenger);
       this.requests.push(passenger.destinationFloor);
       console.log(`${passenger.name} has enter the elevator`);
     }
   });
  }

  _passengersLeave() {
    this.passengers.forEach((person) =>  {
      if (person.destinationFloor == this.floor){
        let index = this.passengers.indexOf(person);
        let  passenger = this.passengers.splice(index,1)[0];
        console.log(`${passenger.name} has left the elevator`);
      }
    });
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR){
      this.floor += 1;
    }
  }

  floorDown() {
    if (this.floor > 0){
      this.floor -= 1;
    }
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }

  log() {
    console.log("direction " + this.direction + "floor "+ this.floor);
  }
}

module.exports = Elevator;
