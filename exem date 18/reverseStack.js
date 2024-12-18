class Stack {
    constructor() {
        this.arr = [];
    }

    push(el) {
        this.arr.push(el);
    }

    isEmpty() {
        return this.arr.length == 0;
    }

    pop() {
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.arr.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.arr[this.arr.length - 1];
    }

    size() {
        return this.arr.length;
    }

    print(){
        return this.arr;
    }
}

let stk = new Stack();
let revStk = new Stack();

stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);

while(!stk.isEmpty()) {
    revStk.push(stk.pop());
}

console.log(revStk.print());