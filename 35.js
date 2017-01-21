// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

const inPlaceShuffle = (arrayOfNumbers) => {
  const randomIndex = (ceiling, floor) => {
    return Math.floor(Math.random() * (ceiling - floor +1) ) + floor
  }
  for(var i = 0; i < arrayOfNumbers.length; i++) {
    var newRandomIndex = randomIndex(arrayOfNumbers.length - 1, i)
    var tempValue = arrayOfNumbers[i]
    arrayOfNumbers[i] = arrayOfNumbers[newRandomIndex],
    arrayOfNumbers[newRandomIndex] = tempValue
  }
  return arrayOfNumbers
}

console.log(inPlaceShuffle([0,1,2,3,4,5,6,7,8,9,10]))
