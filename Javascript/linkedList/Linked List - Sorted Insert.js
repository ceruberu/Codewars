function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  if(head === null){
    return new Node(data);
  } // incase head is null
  
  if(head.next === null){
    head.next = new Node(data);
    return head;
  } // incase head.next is null (tail)
  
  if(data < head.data && data < head.next.data){
    
    var copy = head;
    head = new Node(data);
    head.next = copy
    return head;
  } // incase data should be placed infront of everything;
  
  if(data < head.next.data && data > head.data){
    var copy = head.next;
    head.next = new Node(data);
    head.next.next = copy;
    return head;
  } // incase data is invetweeen;
  
    head.next = sortedInsert(head.next, data)
    return head; // recursive
}
