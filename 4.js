function myFunction(arg) {
    var arr = arg.slice().sort((a,b) => {
      return b.startTime < a.startTime
    })
	  var objs = []
	  objs.push(arr[0])
	  
    for(var i = 1; i < arg.length; i++){
      var prev = objs[objs.length - 1];
      var current = arr[i]
      if(prev.endTime >= current.startTime && prev.endTime <= current.endTime ){
        prev.endTime = current.endTime
      } else if( prev.endTime < current.startTime) {
        objs.push(current)
      }
    }
    return objs
}


console.log(myFunction(  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 5,  endTime: 6},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]));
//  [
//    {startTime: 0, endTime: 1},
//    {startTime: 3, endTime: 8},
//    {startTime: 9, endTime: 12},
//]