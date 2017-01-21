// You have a function rand5() that generates a random integer 
// from 1 to 5. Use it to write a function rand7() that generates a random integer from 1 to 7.

const rand5 = () => {
  return Math.floor(Math.random() * 5) + 1
}

const rand7= () => {
  while(true){
    var possibilityArray = [
      [1,2,3,4,5],
      [6,7,1,2,3],
      [4,5,6,7,1],
      [2,3,4,5,6],
      [7,8,8,8,8]
    ];
    var firstNumber = rand5() - 1;
    var secondNumber = rand5() - 1;
    var location = possibilityArray[firstNumber][secondNumber]
    if(location !== 8) {
      return location
    }
  }
}

rand7()
