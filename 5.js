function changePossibilitiesTopDown(sum, denoms) {
  var currentPossibilities = [];
  for(var i = 0; i <= sum; i++) {
    currentPossibilities[i] = 0;
  }
  currentPossibilities[0] = 1;
  console.log('asdfasd')
  for(var x = 0; x < denoms.length; x++) {
    var coin = denoms[x];
    console.log('coin', coin)
    for(var y = coin; y <= sum; y++ ) {
      var remainder =  currentPossibilities[y - coin]
      currentPossibilities[y] += remainder
    }
  }
  
  console.log(currentPossibilities[y], currentPossibilities)
}
changePossibilitiesTopDown(4, [1,2,3])
changePossibilitiesTopDown(5, [1,3,5])
