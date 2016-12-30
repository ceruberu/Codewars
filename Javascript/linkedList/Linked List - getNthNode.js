function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if(!node || node === null){
    throw error
  }
  var len = length(node)
  if(index > len-1){
    throw error
  }
  var checkNode = node;
 for(var i = 0; i < index; i++){
   checkNode = checkNode.next;
 }
 return checkNode;
}

function length(node){
  if(node === null){
    return 0
  } else {
    return length(node.next) + 1;
  }
}
