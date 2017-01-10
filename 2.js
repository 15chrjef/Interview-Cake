  var myArr= [1, 7, 3, 4];
  
  const mapMultiplier = (arr) => {
    var products = [];
    var productsSoFar = 1;
    for(var i = 0; i < arr.length; i++) {
      products[i] = productsSoFar
      productsSoFar *= myArr[i]
    }
    productsSoFar = 1;
    for(var j = arr.length - 1; j >= 0; j--) {
      console.log(j, productsSoFar)
      products[j] *= productsSoFar
      productsSoFar *= myArr[j]
    }
    console.log(products)
  }
  
  mapMultiplier(myArr) //[ 84, 12, 28, 21 ]

