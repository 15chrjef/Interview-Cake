// Write a function that takes:

// an array of unsortedScores
// the highestPossibleScore in the game
// and returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time.

// For example:

var unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

const sortScores = (scores, highScore) => {
  var totalScoreArr = [];
  var i = 0;
  while( i < highScore + 1) {
    i++
    totalScoreArr.push(0);
  }
  for( var j = 0; j < scores.length; j++ ) {
    totalScoreArr[scores[j]] ++;
  }
  var sortedScores = []
  for( var o = 0; o < totalScoreArr.length; o++) {
    var currentNumber = totalScoreArr[o];
    while( currentNumber > 0) {
      sortedScores.push(o)
      currentNumber --;
    }
  }
  return sortedScores
}

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [37, 41, 53, 65, 89, 91]
