const {ListNode} = require("../extensions/list-node.js");

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

module.exports = class Queue {
    constructor() {
        this.queue = null;
    }

    getUnderlyingList() {
        return this.queue;
    }

    enqueue(val) {
        let node = new ListNode(val);
        if (this.queue === null)
            this.queue = node;
         else {
            let curNode = this.queue;
            while (curNode.next) 
                curNode = curNode.next;
            curNode.next = node;
        }
    }

    dequeue() {
        let val = this.queue.value;
        this.queue = this.queue.next;
        return val;
    }
};