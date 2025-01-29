const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y; 
const divide = (x, y) => x / y;

let inputStack = [null, null, null];
let curr = 0; 


let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
    })
});
