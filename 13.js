
  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];


  var words2 = [
    'w',
    'z',
    'a', // <-- rotates here!
    'c',
    'e',
    'g',
    'h',
    'i',
    'l',
    'n',
    'q',
];

const findRotationPoint = (array) => {
  var first = 0;
  var last = array.length - 1;
  var middle = Math.floor((array.length - 1)/2)
  while(!checkWords(array[middle], array[middle - 1])) {
    if(!checkWords(array[first], array[middle])){
      last = middle;
      middle = Math.floor((first + last)/2)
    } else {
      first = middle;
      middle = Math.floor((first + last)/2)
    }
  }
  return middle
}

const checkWords = (word1, word2) => {
  for(var i = 0; i < word1.length; i++) {
    if(word1[i] > word2[i]) {
      return false
    } else if(word1[i] < word2[i]) {
      return true
    }
  }
  return true
}

findRotationPoint(words)
findRotationPoint(words2)
