var movies = [
  98,
  67,
  90,
  119,
  97,
  95,
  69,
  106,
  85,
  83,
  93,
  92,
  101,
  70,
  117,
  107, 
  100,
  62,
  68,
  115,
  63,
  87,
  60,
  64,
  76,
  105,
  79,
  72,
  84,
  110,
] // false

var movies1 = [60, 70, 80, 30, 40, 10, 50] // movies1
const timeForTwoMovies = (flightLength, movieArray) => {
  var obj = {};
  for(var i = 0; i < movieArray.length; i++) {
    var movieLength = movieArray[i];
    if(obj[flightLength - movieLength] !== undefined) {
      return true
    }
    obj[movieLength] = ''
  }
  return false
}

timeForTwoMovies(120, movies)
timeForTwoMovies(120, movies1)


