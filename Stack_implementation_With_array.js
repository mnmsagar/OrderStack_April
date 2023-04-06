class Stack {
    constructor(n) {
        this.items = [];
        this.currentSize = this.items.length;
        this.maxSize=n;
    }

    push(element) {
        if(this.currentSize>=this.maxSize){
            console.log("Stack is full");
        }else{
            this.items.push(element);
            this.currentSize++;
        }
     
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }else{
            return this.items.pop();
            this.currentSize--;
        }
        
    }

    peek() {
        if(this.currentSize>0){
            return this.items[this.items.length - 1];
        }
        else{
            console.log("Stack is Empty");
        }
    }

    size() {
        if(this.currentSize>0 && this.currentSize<=this.maxSize){
            return this.items.length;
        }else{
            console.log("Stack is Empty");
        }
        
    }

    isEmpty() {
        if(this.currentSize>0 && this.currentSize<=this.maxSize){
            return this.items.length === 0;
        }else if(this.currentSize === 0){
            console.log("Stack is Empty");
        }
       
    }

    clear() {
        if(this.currentSize === 0){
            console.log("Stack is already Empty");
        }else{
            this.items = [];
        }
       
    }
}


// let stack1= new Stack(maxSize);

