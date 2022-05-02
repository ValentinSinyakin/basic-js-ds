const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list.branch.js');

/**
* Implement simple binary search.branch according to task description
* using Node from extensions
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree {
    constructor() {
    this.branch = null;
  }
  root() {
    return this.branch;
  }

  add(data,node = this.branch) {
     if(node === null){
      this.branch = new Node(data);
     }
     else {
       if (data < node.data) {
        
          if(node.left === null){
            node.left = new Node(data);
          }
          else {
            this.add(data, node.left);
          }
        }
        else if (data > node.data) {

          if(node.right === null){
            node.right = new Node(data);
          }
          else {
            this.add(data, node.right);
          }
       }
    else{
        return null;
      }
    }
    
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let out = (this.find(data) !== null);
    return out 
    
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.branch;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
           
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // check has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // check if has no left child 
        if (node.left == null) {
          return node.right;
        }
        // check if  no right child 
        if (node.right == null) {
          return node.left;
        }
        //  has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;

        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.branch = removeNode(this.branch, data);
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.branch;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.branch;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};