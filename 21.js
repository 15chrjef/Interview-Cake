const findNonDuplicate = (arrayOfIds) => {
  var nonDuplicate = 0;
  
  for(var i = 0; i < arrayOfIds.length ; i++) {
     nonDuplicate = nonDuplicate ^ arrayOfIds[i]
  }
  return nonDuplicate
}

findNonDuplicate([1,3,4,7,8,5,7,3,1,4, 8]) // 5
