var str = 'asdfjklasdlbjafsdlkjfadsljkdfajhkdsf';

var strArr = str.split('').reverse().join('')

var manualStringReversal = (string) => {
  string = string.split('')
  var middle = Math.floor(string.length / 2)
  var start = 0;
  var end = string.length - 1;
  while(start !== middle) {
    var temp = string[start];
    string[start] = string[end];
    string[end] = temp;
    start ++;
    end --;
    console.log(string)
  }
  return string.join('')
}
