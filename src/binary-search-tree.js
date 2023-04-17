const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  findNode(node, data) {
    if (!node) {
      return;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  find(data) {
    return this.findNode(this.rootNode, data) || null;
  }

  removeNode(currentNode, data) {
    if (data < currentNode.data) {
      currentNode.left = this.removeNode(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      currentNode.right = this.removeNode(currentNode.right, data);
      return currentNode;
    } else {
      if (!currentNode.left && !currentNode.right) { // has no childs - leaf
        currentNode = null;
        return currentNode;
      }

      if (!currentNode.left) { // has right child
        currentNode = currentNode.right;
        return currentNode;
      }

      if (!currentNode.right) { // has left child
        currentNode = currentNode.left;
        return currentNode;
      }

      // has left and right childs
      let newNode = this.findMinNode(currentNode.right);
      currentNode.data = newNode.data;
      currentNode.right = this.removeNode(currentNode.right, newNode.data);
      return currentNode;
    }
  }

  remove(data) {
    if (this.find(data)) {
      this.rootNode = this.removeNode(this.rootNode, data);
    }
  }

  findMinNode(node) {
    if (!node) {
      return null;
    }

    if (!node.left) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  min() {
    return this.findMinNode(this.rootNode)?.data;
  }

  findMaxNode(node) {
    if (!node) {
      return null;
    }

    if (!node.right) {
      return node;
    }

    return this.findMaxNode(node.right);
  }

  max() {
    return this.findMaxNode(this.rootNode)?.data;
  }
}

module.exports = {
  BinarySearchTree
};