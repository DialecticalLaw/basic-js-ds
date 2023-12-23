const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  data = [];

  getUnderlyingList() {
    return this.data[0];
  }

  enqueue(value) {
    const obj = {
      value: value,
      next: null
    }

    if (this.data.length) {
      this.data.at(-1).next = obj;
    }
    this.data.push(obj);
  }

  dequeue() {
    const result = this.data[0];
    this.data.shift();
    return result.value;
  }
}

module.exports = {
  Queue
};
