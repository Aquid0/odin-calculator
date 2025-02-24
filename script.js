const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y; 
const divide = (x, y) => x / y;

let acc = ""; // accumulator for stored value
let curr = ""; // current value being entered into calculator
let operator = ""; // operator to be used in calculation

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleInput(button.textContent);
    })
});


/* 
1. User clicks on a number, append to curr
2. User clicks on an operator:
    - If acc is empty, store curr in acc
    - If acc already exists and curr is not empty, perform operation, store the result in acc
    - Set new operator 
*/


function handleInput(input) {
    switch (input) {
        case "C":
            acc = ""; 
            curr = "";
            operator = ""; 
            break;
        case "DEL": 
            // TODO
            break; 
        case "%": 
            // TODO 
            break; 
        case "+": 
        case "-": 
        case "/": 
        case "x":
            if (acc === "") {
                acc = curr; 
                curr = ""; 
                operator = input; 
            } else {
                acc = compute(); // Perform operation with existing operator 
                curr = ""; 
                operator = input;
            }
            break; 
        case "=":
            if (acc !== "" && curr !== "" && operator !== "") {
                acc = compute(); 
                curr = ""; 
                operator = ""; 
            }  
            break;
        case ".":
            break;
        default: // number
            curr += input;
            break; 
    }
    console.log(`acc: ${acc}, curr: ${curr}, operator: ${operator}`);
    let display = document.querySelector("#display"); 
    display.textContent = curr === "" ? acc : curr;
}    

function compute() {
    let num1 = parseFloat(acc); 
    let num2 = parseFloat(curr);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "/":
            return divide(num1, num2); // TODO: Fix division by zero
        case "x":
            return multiply(num1, num2); 
        default:
            return "error";
    }
}
