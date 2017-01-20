class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  addNode (value){
    var node = new LinkedListNode(value)
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

class LinkedListNode{
  constructor(value){
    this.value = value;
    this.next = null; 
  }
}

var myList = new LinkedList()
for(var i = 0; i < 10 ; i++) {
  myList.addNode(i)
}


const reverseList = (head) => {
  var currentNode = myList.head;
  var nextNode = myList.head.next;
  var prevNode = null
  while(currentNode !== null) {
    var temp = null;
    if(nextNode && nextNode.next){
      temp = nextNode
      nextNode = nextNode.next
    }
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = temp;
    if(currentNode === null) {
      currentNode = nextNode
      currentNode.next = prevNode
      return currentNode
    }
  }
  return currentNode
}

reverseList(myList.head)
