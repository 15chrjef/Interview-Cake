// A building has 100 floors. One of the floors is 
// the highest floor an egg can be dropped from without breaking.

const highestFloorDrop = (maxFloor) => {
  console.log(maxFloor)
  var currentDrops = 0;
  var currentFloor = 0;
  var currentFloorVelocity = 14;
  while(currentFloor + currentFloorVelocity <= maxFloor) {
    currentDrops ++;
    currentFloor = currentFloor + currentFloorVelocity;
    currentFloorVelocity--;
  }
  currentFloor ++
  currentDrops ++;
  while(currentFloor <= maxFloor) {
    currentDrops ++
    currentFloor ++
  }
  console.log(currentFloor - 1, currentDrops)
  return currentFloor - 1;
}

var randomMax = Math.floor(Math.random() * 100) + 1;


highestFloorDrop(randomMax)
