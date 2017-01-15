const trieBuilder = (words) => {
  var trie = {};
  for (var j = 0; j < words.length; j++) {
    var word = words[j]
    var currentTrie  = trie
    for(var i = 0; i < word.length; i++) {
      currentTrie  = currentTrie === undefined ? trie : currentTrie;
      var character = word[i];
      if(!currentTrie.hasOwnProperty(character)) {
        currentTrie[character] = {}
      }
      currentTrie = currentTrie[character]
    }
  }
  return trie;
}

trieBuilder(['hello','llo','heo','hell','heo','ello'])
//{ h: { e: { l: [Object], o: {} } },
// l: { l: { o: {} } },
// e: { l: { l: [Object] } } }
   
