function newStack() {
  let stack = [];
  return {
    push(element) {
      stack.push(element);
    },
    pop() {
      stack.pop();
    },
    printStack() {
      for (let i = stack.length - 1; i >= 0; i -= 1) {
        console.log(stack[i]);
      };
    }
  }
}

