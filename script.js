function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(2, 2));
console.log(divide(4, 2));
console.log('++++++++');
console.log(operate('+', 1, 2));
console.log(operate('-', 1, 2));
console.log(operate('*', 2, 2));
console.log(operate('/', 4, 2));