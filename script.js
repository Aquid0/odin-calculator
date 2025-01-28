const add = (x, y) => x + y; 
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y; 
const divide = (x, y) => x / y;

let inputStack = [NULL, NULL, NULL];
let curr = 0; 

/*
    stack
    n1  o  n2
    [0, 0, 0]
      ^

     if i == 0:
        if input = operation:
            i = 1
            s[i] = operation
        else:
            append digit to s[0]
    elif i == 1: 
        if input = operation:
            s[i] = operation
        else: 
            i = 2
            append digit to s[2]
    elif i == 2: 
        if input = operation:
            s[0] = operate(s[1], s[0], s[2]) 
            if input == =:
                s[1] = NULL
                s[2] = NULL
                i = 0
            else:
                s[1] = operation
                s[2] = NULL 
                i = 2  
            display num1 
        else: 
            append digit to s[2]
            display num2
    
    What happens if num -> + -> - -> num
    1 -> 1 -> + -> - -> 1 -> = -> 10
    
    [1, NULL, NULL]
    [11, NULL, NULL]
    [11, +, NULL]
    [11, -, NULL]
    [11, -, 1]
    [10, NULL, NULL]
*/



function operate(op, num1, num2) {
    return op(num1, num2);
}

