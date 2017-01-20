const palindromPermutation = (string) => {
  var unpairedCharacters = {};
  for(var i = 0; i < string.length; i++ ){
    if(unpairedCharacters[string[i]] === true) {
      delete unpairedCharacters[string[i]]
    } else {
      unpairedCharacters[string[i]] = true
    }
  }
  var characterCounter = 0;
  for(let key in unpairedCharacters) {
    characterCounter ++
  }
  
  if(characterCounter > 1){
    console.log(false)
    return false
  } else {
    console.log(true)
    return true
  }
}

palindromPermutation("civic") //true
palindromPermutation("ivicc") //true
palindromPermutation("civil") //false
palindromPermutation("livci") //false
