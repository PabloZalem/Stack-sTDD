class Stack {
    constructor() {
        this.empty = true;
        this.size = 0;
        this.elements = [];
    }

    isEmpty() {
        return this.empty;
    }

    push(element) {
        this.empty = false;
        return this.elements[this.size++] = element;
    }

    pop() {
        if(this.size === 0) throw new Error('UnderflowException');
        this.empty = this.size === 1;
        return this.elements[--this.size];
    }

    getSize() {
        return this.size;
    }
}

module.exports = Stack;