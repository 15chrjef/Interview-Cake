// Our challenge was to find a duplicate number, while optimizing for space. We used a divide and conquer approach, iteratively cutting the array in half to find a duplicate integer in O(n\lg{n})O(nlgn) time and O(1)O(1) space (sort of a modified binary search).

const findDuplicateInLinearTime = (myArray) => {
  var head = myArray.length - 1;
  var currentPosition = head;
  for(var i = 0; i < myArray.length; i++) {
    currentPosition = myArray[currentPosition - 1]
  }
  var steps = 1;
  var newCurrentPosition = myArray[currentPosition - 1];
  var i = 0;
  while(newCurrentPosition !== currentPosition && i < 1000) {
    newCurrentPosition = myArray[newCurrentPosition - 1];
    steps ++;
  }
  var secondNodeIndex = myArray[head - steps]
  var x = 0;
  while(myArray[secondNodeIndex] !== myArray[head] && x < 1000){
    secondNodeIndex = myArray[secondNodeIndex - 1];
    head = myArray[head - 1];
  }
  return myArray[secondNodeIndex];
}
const duplicateArr = [3, 1, 2, 2];// 2
const dupArr = [1,14,16,2,13,12,5,15,6,13,14,16,12,8,4,3,15];//13
