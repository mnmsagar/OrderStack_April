class Stack {
    constructor(n) {
      this.items = [];
      this.maxSize = n;
    }
  
    push(element) {
      if (this.items.length >= this.maxSize) {
        return "Stack is Full";
      } else {
        this.items.push(element);
      }
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      } else {
        return this.items.pop();
      }
    }
  
    peek() {
      if (this.items.length> 0) {
        return this.items[this.items.length - 1];
      } else {
        return "Stack is Empty";
      }
    }
  
    size() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    clear() {
      this.item = [] ;
    }
  }


// Test Cases

  // Create a new stack with a maximum size of 3
const stack = new Stack(3);

// Test push method
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size()); // Expected output: 3
console.log(stack.push(4)); // Expected output: "Stack is Full"

// Test pop method
console.log(stack.pop()); // Expected output: 3
console.log(stack.pop()); // Expected output: 2
console.log(stack.pop()); // Expected output: 1
console.log(stack.pop()); // Expected output: "Underflow"

// Test peek method
console.log(stack.peek()); // Expected output: "Stack is Empty"
stack.push(5);
console.log(stack.peek()); // Expected output: 5

// Test size method
console.log(stack.size()); // Expected output: 1

// Test isEmpty method
console.log(stack.isEmpty()); // Expected output: false
stack.pop();
console.log(stack.isEmpty()); // Expected output: true

// Test clear method
stack.push(6);
stack.push(7);
console.log(stack.size()); // Expected output: 2
stack.clear();
console.log(stack.size()); // Expected output: 0
console.log(stack.isEmpty()); // Expected output: true
