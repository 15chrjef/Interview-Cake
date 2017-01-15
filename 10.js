function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

BinaryTreeNode.prototype.find2ndLargestInteger = (myTree) => {
  var currentTree = myTree;
  console.log('asdfasd',currentTree)
  while(currentTree.right && currentTree.right.right !== null) {
    currentTree = currentTree.right
  }
  return currentTree.value
}


const myTree = new BinaryTreeNode(5)
myTree.insertRight(10)
myTree.insertLeft(7)
myTree.right.insertRight(20)
myTree.left.insertLeft(17)
myTree.right.right.insertRight(30)
myTree.left.left.insertLeft(27)

myTree.right.right.right.insertRight(40)
myTree.left.left.left.insertLeft(37)


myTree.find2ndLargestInteger(myTree)
