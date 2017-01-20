function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;


const kthToLastNode = (integer, head) => {
  var length = 0;
  var curNode = head;
  while(curNode !== null) {
    length ++;
    curNode = curNode.next
  }
  curNode = head
  for(var i = 0; i < length - integer; i++) {
    curNode = curNode.next;
  }
  return curNode
}

kthToLastNode(2, a);
// returns the node with value "Devil's Food" (the 2nd to last node)
