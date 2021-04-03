class Node {
  constructor(input_node_value) {
    this.value = input_node_value;
    this.next_pointer = null;
  }
}

class SinglyLinkedList {
  constructor(input_node_value) {
    this.head_pointer = new Node(input_node_value);
    this.tail_pointer = this.head_pointer;
    this.singly_linked_list_length = 1;
  }
 
  append(input_node_value) {
    const newNode = new Node(input_node_value);
    this.tail_pointer.next_pointer = newNode;
    this.tail_pointer = newNode;
    this.singly_linked_list_length++;
  }
  
  prepend(input_node_value) {
    const newNode = new Node(input_node_value);
    newNode.next_pointer = this.head_pointer;
    this.head_pointer = newNode;
    this.singly_linked_list_length++;
  }

  printList() {
    const singly_linked_list_values = [];
    let currentNode = this.head_pointer;
    while (currentNode !== null) {
      singly_linked_list_values.push(currentNode.value);
      currentNode = currentNode.next_pointer;
    }
    console.log('List Length =', this.singly_linked_list_length);
    console.log('Head Pointer =', this.head_pointer.value);
    console.log('Tail Pointer =', this.tail_pointer.value);
    return singly_linked_list_values;
  }
  
}

// 1->10->12->234->101->67
const mySinglyLinkedList = new SinglyLinkedList(10);

mySinglyLinkedList.append(12);
mySinglyLinkedList.append(234);
mySinglyLinkedList.append(101);
mySinglyLinkedList.append(67);
mySinglyLinkedList.prepend(1);
mySinglyLinkedList.printList();
