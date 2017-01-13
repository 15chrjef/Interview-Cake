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

BinaryTreeNode.prototype.superBalancer = function(minDepth, currentDepth) {
  var root = this;
  var nodes = [];
  var leafDepths = [];
  nodes.push([this, 0])
  
  while(nodes.length > 0) {
    var currentTree = nodes.pop();
    var tree = currentTree[0]
    var depth = currentTree[1]
    if(!tree.left || !tree.right) {
      var leafDepth = currentTree[1] + 1
      if(leafDepths.indexOf(leafDepth) === -1 && leafDepths.length === 2) {
        return false
      } else if (leafDepths.indexOf(leafDepth) === -1) {
        leafDepths.push(leafDepth)
      }
    }
    if(tree.left) {
      nodes.push( [tree.left, depth + 1] )
    }
    if(tree.right) {
      nodes.push( [tree.right, depth + 1])
    }
  }
  return true
}

myTree = new BinaryTreeNode(1)

myTree.insertRight(5)
myTree.insertLeft(2)
myTree.left.insertLeft(2)

// myTree.left.left.insertLeft(3)

myTree.superBalancer()
// myTree.right.insertRight(3)
// myTree.right.right.insertRight(4)

// myTree.superBalancer()
