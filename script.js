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
  });
});

document.addEventListener("keydown", (e) => { 
  let key = e.key 

  if (key === "*") {
    key = "x";
    handleInput(key);
  }

  if (key === "Backspace") {
    key = "DEL";
    handleInput(key);
  }

  if (key === "Enter" || key === "=") {
    key = "=";
    handleInput(key);
  }

  const validKeys = "0123456789.+-/x";
  if (validKeys.includes(key)) {
    handleInput(key);
  }
}); 

function handleInput(input) {
  switch (input) {
    case "C":
      acc = "";
      curr = "";
      operator = "";
      break;
    case "DEL":
      curr = curr.slice(0, -1);
      break;
    case "%":
      if (curr !== "") {
        curr = (parseFloat(curr) / 100).toString();
      }
      break;
    case "+":
    case "-":
    case "/":
    case "x":
      if (curr === "") {
        operator = input;
      } else {
        if (acc === "") {
          acc = curr;
          curr = "";
          operator = input;
        } else if (operator !== "") {
          acc = compute(); // Perform operation with existing operator
          curr = "";
          operator = input;
        } else if (operator === "") {
          operator = input;
        }
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
      if (curr.includes(".")) {
        break;
      } else {
        curr += input
      }
      break;
    default: // number
      curr += input;
      break;
  }
  console.log(`acc: ${acc}, curr: ${curr}, operator: ${operator}`);
  display();
}

function display() {
  let display = document.querySelector("#display");
  let val = "";
  if (curr === "" && acc === "") {
    val = "0";
  } else if (curr === "") {
    val = acc;
  } else {
    val = curr;
  }
  val = Math.round(parseFloat(val) * 1e7) / 1e7; 
  display.textContent = val.toString();
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
      if (num2 === 0) {
        return "error";
      }
      return divide(num1, num2); // TODO: Fix division by zero
    case "x":
      return multiply(num1, num2);
    default:
      return "error";
  }
}
