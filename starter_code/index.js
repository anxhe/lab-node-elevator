const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person1 = new Person("Pepita", 3, 5);
let person2 = new Person("Rosa", 0, 1);
let person3 = new Person("Jorge", 2, 10);
let person4 = new Person("Alan", 4, 6);

elevator.call(person1);
elevator.call(person2);
elevator.call(person3);
elevator.call(person4);

elevator.start();
var nextFloor;

while (elevator.waitingList.length > 0 || elevator.passengers.length > 0) {
  elevator._passengersEnter();

  if (elevator.passengers.length > 0) {
    nextFloor = elevator.passengers[0].destinationFloor;
  } else {
    nextFloor = elevator.waitingList[0].originFloor;
  }

  while (elevator.floor != nextFloor) {
    if (elevator.direction == "up") {
      elevator.floorUp();
    } else {
      elevator.floorDown();
    }

    elevator._passengersEnter();
    elevator._passengersLeave();
  }
}

elevator.stop();
