var myRectangle = {
  leftX: 5,
  bottomY: 0,
  width: 20,
  height: 5,
};

var otherRectangle = {
  leftX:5,
  bottomY: 5,
  width: 20,
  height: 20
}

function findArea(rec1, rec2) {
  var lowStart = rec1.bottomY < rec2.bottomY ? rec1 : rec2;
  var highStart = rec1.bottomY < rec2.bottomY ? rec2 : rec1;
  var leftStart = rec1.leftX < rec2.leftX ? rec1 : rec2;
  var rightStart = rec1.leftX < rec2.leftX ? rec2 : rec1;
  var length = Math.min((lowStart.height + lowStart.bottomY) - highStart.bottomY,  + highStart.height) 
  width = Math.min((leftStart.leftX + leftStart.width) - rightStart.leftX,  rightStart.width)
  var edge = length === 0 || width === 0 ? 'we have an edge' : false
  if(edge.length > 0) {
    return edge
  }
  return length * width > 0 ? length * width : 'no intersection'
  console.log(length  * width)
}

findArea(myRectangle, otherRectangle)
