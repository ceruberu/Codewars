function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (head === null){
    return 0
    } else {
      return length(head.next) + 1;
    }
}

function count(head, data) {
  var int = 0;
  if (head === null){
    return int
  } else {
    if(head.data === data){
        int++;
    }
    int = int +count(head.next, data);
    return int;
  }
}
