// Implement a Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }

    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return "This tree is empty";
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
      else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return value + " It's not present in this tree";
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  findMinNode(node) {
    // if left of a node is null 
    // then it must be minimum node 
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }


  removeNode(node, key) {

    // if the root is null then tree is  
    // empty 
    if (node === null)
      return null;

    // if value to be delete is less than  
    // roots value then move to left subtree 
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // if value to be delete is greater than  
    // roots value then move to right subtree 
    else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if value is similar to the root's value  
    // then delete this node 
    else {
      // deleting node with no children 
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children 
      if (node.left === null) {
        node = node.right;
        return node;
      }

      else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children 
      // minumum node of the rigt subtree 
      // is stored in aux 
      var aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }

  }

}

const tree = new BinarySearchTree();

// Add nodes

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(20);

/*
      9
     / \
    4   20
   / \  / \
   1 6  15 170
*/
// let node = 4;
// console.log(tree.lookup(node));
console.log(tree.getRootNode());


/*
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
*/
// JSON.stringify(traverse(tree.root));
