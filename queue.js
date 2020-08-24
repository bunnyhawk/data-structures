function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item)
    },
    dequeue(item) {
      return queue.pop()
    },
    peek() {
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length === 0
    }
  }
}

module.exports = { createQueue }

// const q = createQueue();

// q.enqueue('Watch an egghead lesson');
// q.enqueue('Help myself learn');
// q.enqueue('Be happy')

// q.dequeue();
// q.dequeue()
// console.log(q.peek())