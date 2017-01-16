var cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

const maxDuffelBagValue = (arrayOfCakes, capacity) => {
  var newCakes = cakeTypes.slice().sort((a,b) => a.weight > b.weight )
  var matrix = [];
  for(var j = 0; j <= capacity; j++) {
    matrix.push([0]);
    for(var i = 0; i < newCakes.length; i++) {
      var val = 0;
      var weight = 0;
      while(weight + newCakes[i].weight <= j) {
        val += newCakes[i].value;
        weight += newCakes[i].weight
      }
      var weightRemaining = j - weight;
      var valRemaining = typeof matrix[weightRemaining][i] === 'number' ? matrix[weightRemaining][i] : 0;
      val += valRemaining;
      var leftMatrixIndex = i !== 0 ? i - 1 : 0;
      var topMatrixVal = j !== 0 ? matrix[j][leftMatrixIndex] : 0;
      matrix[j][i] = Math.max(topMatrixVal, val)
    }
  }
  console.log(matrix[j-1][i-1])
  return matrix[j-1][i-1]
}

maxDuffelBagValue(cakeTypes, 20); //555
