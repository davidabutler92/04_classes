class Stack {
    #stack;
  
    constructor() {
      this.#stack = [];
    }
  
    // put item on top of stack
    push(item) {
        this.#stack.push(item);
    }
    
    // take item off the top of stack and return that item
    pop() {
        this.#stack.pop() 
    }
  
    // look at item on top of stack
    peek() {
        return this.#stack.peek();
    }
  }
  
  module.exports = Stack;