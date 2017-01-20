var string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

const parentheticals = (index) => {
  if(string === '()'){
    return 1
  }
  var openingNumberOfIndex = 0;
  var total = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] === '(') {
      total ++;
      if(i === index) {
        openingNumberOfIndex = total;
      }
    }
  }
  console.log(openingNumberOfIndex, total)
  var closingNumberOfIndex = total - openingNumberOfIndex;
  var target = 0;
  for( i = 0; i < string.length; i++) {
    if( string[i] === ')') {
      target ++;
      if(target === 1 && closingNumberOfIndex === 0 || target === closingNumberOfIndex) {
        return i +1
      }
    }
  }
}


parentheticals(10) //79
