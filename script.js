const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y; 
const divide = (x, y) => x / y;

let num1, num2; 
let operation; 

/*
    stack

    

*/

function operate(op, num1, num2) {
    return op(num1, num2);
}

