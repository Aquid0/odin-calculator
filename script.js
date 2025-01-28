const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y; 
const divide = (x, y) => x / y;

let inputStack = [NULL, NULL, NULL];
let curr = 0; 


function operate(op, num1, num2) {
    return op(num1, num2);
}

