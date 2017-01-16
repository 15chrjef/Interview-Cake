const fib = (target, current, prev1, prev2) => {
  prev1 = prev1 || 1;
  prev2 = prev2 || 0;
  if(current === target){
    return prev1 + prev2
  }
  current +=1;
  var temp = prev1 + prev2;
  prev2 = prev1
  prev1 = temp
  return fib(target, current, prev1, prev2)
}

fib(10, 3)
