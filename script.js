const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y; 
const divide = (x, y) => x / y;

let acc = ""; 
let curr = ""; 
let operator = ""; 

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
    })
});

function handleInput(input) {
    switch (input) {
        case "C":
            // TODO 
            break;
        case "DEL": 
            // TODO
            break; 
        case "%": 
            // TODO 
            break; 
        case "+": 
            break; 
        case "-": 
            break; 
        case "/": 
            break; 
        case "x":
            break; 
    }
}    