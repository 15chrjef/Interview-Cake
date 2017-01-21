// You want to build a word cloud, an infographic where the size 
// of a word corresponds to how often it appears in the body of text.

const wordCloud = (text) => {
  var returnableWordCloud = {};
  var currentWord = '';
  for(var i = 0; i < text.length; i++) {
    var currentCharacter = text[i];
    if(i === text.length - 1 || currentCharacter === ' ' || (currentCharacter === '-' && (isValidCharacter(text[i -1])) && (isValidCharacter(text[i + 1])))){
      if(returnableWordCloud[currentWord] !== undefined) {
        returnableWordCloud[currentWord.toLowerCase()] ++
      } else{
        returnableWordCloud[currentWord.toLowerCase()] = 1;
      }
      currentWord = '';
    } else if(isValidCharacter(currentCharacter)) {
      currentWord += currentCharacter
    } else if( currentCharacter === '.'){
      if(text[i + 1] === '.' && currentWord.length > 0) {
        if(returnableWordCloud[currentWord] !== undefined) {
          returnableWordCloud[currentWord.toLowerCase()] ++
        } else{
          returnableWordCloud[currentWord.toLowerCase()] = 1;
        }
        currentWord = '';
      }
    }
  }
  return returnableWordCloud;
}

const isValidCharacter = (character) => {
  return 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.indexOf(character) >= 0;
}

wordCloud(  "After beating the eggs, Dana read the next step: Add milk and-eggs, then add...flour and sugar.")

/*
{ after: 1,
  beating: 1,
  the: 2,
  eggs: 2,
  dana: 1,
  read: 1,
  next: 1,
  step: 1,
  add: 2,
  milk: 1,
  and: 2,
  then: 1,
  flour: 1,
  sugar: 1 }
*/
