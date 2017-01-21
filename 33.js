// I have an array where every number 
// in the range 1...n1...n appears once 
// except for one number which appears twice.

const findDeuplicate = (array) => {
  var max = 0;
  var currentSum = 0;
  for(var i = 0; i < array.length ; i++) {
    if(array[i] > max) {
      max = array[i]
    }
    currentSum += array[i]
  }
  var correctSum = 0;
  for(var j = 1; j < max + 1 ; j++){
    correctSum += j
  }
  return currentSum - correctSum
}



findDeuplicate([1,2,3,12,4,10,9,8,7,6,11,5,13,14,15,9,16,17])
//9
