const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.headNode = null;
  }

  getUnderlyingList() {
    return this.headNode || new ListNode(null);
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let currentNode = this.headNode;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  dequeue() {
    let deletedNode = this.headNode;

    this.headNode = this.headNode.next;

    return deletedNode.value;
  }
}

module.exports = {
  Queue
};
