// Vamos chamar o arquvio stack.js
const Stack = require('./stack')

// Semelhante a um suit de test
describe('Stack', () => {
    let stack;

   beforeEach(() => {
    stack = new Stack();
   });


test('Stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
});

test('Push an element', () => {
    stack.push(0);
    expect(stack.isEmpty()).toBe(false);
});

test('Pop an element', () => {
    stack.push(0);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
});

test('Get size this stack',() => {
    stack.push(0);
    stack.push(0);
    expect(stack.getSize()).toBe(2);
});

test('Throw underflow exception', () =>{
    expect(() => {
        stack.pop();
    }).toThrow('UnderflowException');  
});

test('Push especific element after pop it', () => {
    stack.push(10);
    expect(stack.pop()).toBe(10);
});

test('Push more than one element after pop us', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
});
});