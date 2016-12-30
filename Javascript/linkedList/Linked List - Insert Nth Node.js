// this problem could be solved using recursion, but I didnt know how, should be revised;

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  if(!head){
    return new Node(data);
  }
  if(index === 0){
    var asdasd = new Node(data);
    asdasd.next = head;
    return asdasd;
  }
  var len = findLength(head);
  if(index > len){
    throw error
  }

  var current = head;
  for(var i = 0; i < index-1; i++){
    current = current.next;
  }
  var future = new Node(data);
  future.next = current.next;
  current.next = future;
  
  return head;
  
 
}

function findLength (node){
  if(node.next === null ){
    return 1;
  } else {
    return findLength(node.next) + 1;
  }
}
