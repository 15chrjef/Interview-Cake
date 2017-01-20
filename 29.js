const bracketChecker = (string) => {
  var openOptions = ['[','{','(']
  var closeOptions = [']','}',')']
  var lastOpeningBrackets = [];
  for(var i = 0; i < string.length; i++) {
    var openIndex = openOptions.indexOf(lastOpeningBrackets[lastOpeningBrackets.length -1]);
    var closeIndex = closeOptions.indexOf(string[i])
    if(closeIndex !== -1 && lastOpeningBrackets.length > 0 && closeIndex !== openIndex) {
      console.log(false)
      return false
    } else if(openOptions.indexOf(string[i]) > -1) {
      lastOpeningBrackets.push(string[i]);
    } else if(closeIndex !== -1 && closeIndex === openIndex) {
      lastOpeningBrackets.pop()
    }
  }
  console.log(true)
  return true 
}

bracketChecker("{ [ ] ( ) }")
bracketChecker("{ [ ( ] ) }")
bracketChecker("{ [ }" )


