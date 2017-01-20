var message = 'find you will pain only go you recordings security the into if';

const reverseCharacters = (string,start, end) => {
  var string = string.split('');
  while(start < end) {
    var temp = string[start]
    string[start] = string[end]
    string[end] = temp;
    start ++
    end --
  }
  return string.join('')
}

function reverseWords(message){
  message = reverseCharacters(message, 0 , message.length - 1)
  var startingIndex = 0;
  var endingIndex = 0;
  for(var i = 0; i <= message.length; i++) {
    if(message[i] === ' ' ||  i === message.length) {
      message = reverseCharacters(message, startingIndex, i -1 )
      startingIndex = i + 1;
    }
  }
  return message
}

console.log(reverseWords(message));
// returns: 'if into the security recordings you go only pain will you find'

