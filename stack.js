function createStack() {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    length() {
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    }
  }
}

const lowerBodyStack = createStack();

lowerBodyStack.push('underwear');
lowerBodyStack.push('socks');
lowerBodyStack.push('pants');
lowerBodyStack.push('shoes');

lowerBodyStack.peek();