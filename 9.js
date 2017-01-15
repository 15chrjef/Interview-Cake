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

const BinaryTreeBool = (Tree, max, min) => {
  if(Tree === null) {
    return true
  }

  if(Tree.value > max || Tree.value < min) {
    return false;
  }
  
  return BinaryTreeBool(Tree.left, Tree.value, min) && BinaryTreeBool(Tree.right, max, Tree.value)
}


const myTree = new BinaryTreeNode(5)
myTree.insertRight(6)
myTree.right.insertRight(7)
myTree.insertLeft(4)
myTree.left.insertLeft(1)

BinaryTreeBool(myTree, Infinity, -Infinity)
