var stocks = [10, 7, 5, 8, 11, 9];
var stocks1 = [10, 7, 5, 3, 1, 0 ];

function maxVal (arr) {
  var keptValue = arr[0]
  var maxProfit = -100000000;
  for(var i = 1; i< arr.length ; i++) {
    if(arr[i] - keptValue > maxProfit ) {
      maxProfit = arr[i] - keptValue
    }
    if(arr[i] < keptValue) {
      keptValue = arr[i]
    }
  }
  return maxProfit;
}

maxVal(stocks) //6
maxVal(stocks1) // -1