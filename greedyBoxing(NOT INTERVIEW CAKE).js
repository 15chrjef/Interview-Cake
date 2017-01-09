function greed(arr){
  arr = arr.sort(function(a, b){ return a[0] < b[0] ? -1 : 1 })
  var counter = 0
  var myArr = []
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      var val = arr[i][j];
      if(!checkObj(val, myArr)){
        var others = checkOthers(arr, val, myArr)
        if (others !== -1){
          myArr.push(others)
          counter ++;
        }
      }
    }
  }
  return counter
}
      
function checkObj(val, arr) {
  for(var i = 0; i < arr.length; i++) {
    first = Number(arr[i].substr(0,arr[i].indexOf('-')))
    second = Number(arr[i].substr(arr[i].indexOf('-') + 1))
    if(first <= val && val <= second) {
      return true
    }
  }
  return false
}
    
function checkOthers(arr, num, myArr) {
  var miniCounter = 0;
  var maxVal = num;
  for(var x = 0; x < arr.length; x++){
    for(var y = 0; y < arr[x].length; y++){
      var val = arr[x][y];
      if(val && val <= num + 1000 && val >= num){
        miniCounter ++
        if( val > maxVal){ 
          maxVal = val;
        }
        if(miniCounter === 3) {
          if(!checkObj(val, myArr)){
            var string = ''.concat(num,'-', maxVal)
            return string
          } else {
            miniCounter --;
          }
        }
        y = arr[x].length
      }
    }
  } 
  return -1
}