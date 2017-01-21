//You have a function rand7() that generates a random integer 
//from 1 to 7. Use it to write a function rand5() that generates a random integer from 1 to 5.

const rand7 = () => {
  return Math.floor(Math.random() * 7) + 1
}

const rand5UsingRand7 = () => {
  while(true) {
    var rand7Val = rand7();
    if(rand7Val < 6){
      return rand7Val
    }
  }
}

rand5UsingRand7();
