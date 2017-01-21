const cardsRiffled = (fullDeck, deck1, deck2) => {
  while(fullDeck.length > 0) {
    if(fullDeck[0] !== deck1[0] && fullDeck[0] !== deck2[0]) {
      return false
    } else if ( fullDeck[0] === deck1[0]) {
      fullDeck.shift();
      deck1.shift();
    } else if ( fullDeck[0] === deck2[0]) {
      fullDeck.shift();
      deck2.shift();
    }
  }
  return true
}


const riffleCards = (deck) => {
  var newRiffledDeck = []
  let deckCopy = deck.slice()
  const deck1 = deck.slice(0,26)
  const deck2 = deck.slice(26)
  var i = 0;
  while((deck2.length > 0 || deck1.length > 0)) {
    var randomNumber;
    var cardsToAdd
    if(deck1.length) {
      randomNumber = Math.floor(Math.random() * (deck1.length - 1)) + 1;
      cardsToAdd = deck1.splice(0, randomNumber)
      newRiffledDeck = newRiffledDeck.concat(cardsToAdd)
    }
    if(deck2.length) {
      randomNumber = Math.floor(Math.random() * (deck2.length - 1)) + 1;
      cardsToAdd = deck2.splice(0, randomNumber)
      newRiffledDeck = newRiffledDeck.concat(cardsToAdd)
    }
  } 
  return newRiffledDeck
}


const realDeck = [];
for(var i = 0; i < 52; i++) {
  realDeck.push(i)
};

cardsRiffled(riffleCards(realDeck), realDeck.slice(0,26), realDeck.slice(26))
