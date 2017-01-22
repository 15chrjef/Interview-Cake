// A building has 100 floors. One of the floors is 
// the highest floor an egg can be dropped from without breaking.
const findDuplicate = (arr) => {
  var lower = 1;
  var upper = arr.length -1 ;
  var i = 0;
  while(upper > lower ) {
    var midpoint = Math.floor((upper + lower)/2);
    var lowerArrayFloor = lower;
    var lowerArrayCeling = midpoint;
    var possibleUniqueValues = lowerArrayCeling - lowerArrayFloor + 1;
    var currentValues = 0;
    arr.forEach((number) => {
      if(number >= lowerArrayFloor && number <= lowerArrayCeling) {
        currentValues ++
      }
    })
    if(currentValues > possibleUniqueValues) {
      upper = midpoint;
    } else {
      lower = midpoint;
    }
  }
  return lower
}

const duplicateArr = [1,14,16,3,13,12,5,15,6,13,14,16,12,8,4,3,15]
findDuplicate(duplicateArr)

