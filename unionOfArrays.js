const combineArrays = (array1, array2) => {
  var unionOfArrays = [];
  const shiftArray = (givenArray) => {
    if(unionOfArrays.indexOf(givenArray[0]) !== - 1) {
      givenArray.shift()
      givenArray
    } else {
      unionOfArrays.push(givenArray.shift())
    }
  }
	while((array1.length > 0 || array2.length > 0)) {
    if(array2.length === 0) {
      shiftArray(array1)
    } else if (array1.length === 0) {
      shiftArray(array2)
    } else if (array1[0] >= array2[0]) {
      shiftArray(array2)
    } else if (array2[0] > array1[0]) {
      shiftArray(array1)
    }
  }
  console.log(unionOfArrays);
  return unionOfArrays;
}



combineArrays([1,3,11,23,23,45],[2, 11, 23,25,26,27] )
//=> [ 1, 2, 3, 11, 23, 25, 26, 27, 45 ]

