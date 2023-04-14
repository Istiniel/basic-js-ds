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
  queue = {};
  tail = 0;
  head = 0;

  getUnderlyingList(pointer = this.head) {
    if (pointer === this.tail) {
      return null;
    }
    return {
      value: this.queue[pointer],
      next: this.getUnderlyingList(pointer + 1),
    };
  }

  enqueue(value) {
    this.queue[this.tail++] = value;
  }

  dequeue() {
    if (this.tail === this.head) return undefined;

    let first = this.queue[this.head];

    delete this.queue[this.head++];
    return first;
  }
}

module.exports = {
  Queue,
};
