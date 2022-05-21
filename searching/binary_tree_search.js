/**
 * An alternative to sorting a collection is to generate a Binary Search Tree (BST) from it. 
 * As a BST, searching through it is as efficient as binary search.
 *  In a similar way, we can discard the half that we know cannot contain our desired value at every iteration.
 *  In fact, another way to sort a collection is to do a depth-first traversal across this tree in-order!
 *  BST creation happens in linear time and space, but searching through it happens in logarithmic time and constant
 *  space.
 * 
 * 
 */

 class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      if (data < this.data && this.left) this.left.insert(data);
      else if (data < this.data) this.left = new Node(data);
      else if (data > this.data && this.right) this.right.insert(data);
      else if (data > this.data) this.right = new Node(data);
    }
  
    search(data) {
      if (this.data === data) return this;
      if (this.data < data && this.right) return this.right.search(data);
      else if (this.data > data && this.left) return this.left.search(data);
      return null;
    }
  }