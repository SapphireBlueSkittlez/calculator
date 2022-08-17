let displayValue = "";
let num1 = 0;
let operator = "";
let hasDecimal = false;
const formula = document.getElementById('formula');
const display = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (!(isNaN(Number(e.target.textContent)))) {
            enterNumber(e.target.textContent);
        } else if(e.target.textContent == '.') {
            useDecimal(e.target.textContent);
        } else if (e.target.textContent == 'C'){
            clearDisplay();
        } else if (e.target.textContent == '<-'){
            backSpace();
        } else if (e.target.textContent == '='){
            useEqual();
        } else {
        useOperator(e.target.textContent); 
        }
    });
});

document.addEventListener('keydown', (e) => {
    if(Number(e.key) >= 0 && Number(e.key) <= 9) {
        enterNumber(e.key);
    } else if(e.key == '.') {
        useDecimal(e.key);
    } else if (e.key == 'c'){
        clearDisplay(); 
    } else if (e.key == 'Backspace'){
        backSpace();
    } else if (e.key == '=' || e.key == 'Enter'){
        useEqual();
    } else if (e.key == '+' ||
                e.key == '-' ||
                e.key == '*' ||
                e.key == '/') {
       useOperator(e.key); 
    } else {
        clearDisplay();
    }
});

function enterNumber(num) {
    display.textContent += num;
}

function useDecimal(point) {
    if(!hasDecimal) {
        if(display.textContent == '') {
            display.textContent += '0';
        }
        display.textContent += point;
        hasDecimal = true;
    }
}

function clearDisplay() {
    displayValue = "";
    num1 = 0;
    operator = "";
    display.textContent = "";
    formula.textContent = "";
    hasDecimal = false;
}

function backSpace() {
    if(display.textContent == "") {
        return;
    }
    if(display.textContent.substring(display.textContent.length -1) == '.') {
        hasDecimal = false;
    }
    display.textContent = display.textContent.slice(0, -1);
}

function useEqual() {
    if(num1 == undefined || isNaN(num1)) {
        num1 = 0;
    }
    hasDecimal = false;
    displayValue = display.textContent;
    displayValue = operate(operator, num1, Number(displayValue));

    formula.textContent = displayValue;
    operator = "";
    display.textContent = "";
    num1 = Number(displayValue);
}

function useOperator(op) {
    if(num1 == undefined || isNaN(num1)) {
        num1 = 0;
    }
    if(display.textContent != "") {
        displayValue = display.textContent;
    }
    if(operator != "") {
        displayValue = operate(operator, num1, Number(displayValue));
    }
        
    hasDecimal = false;
    formula.textContent = displayValue;
        
    operator = op;
        
    display.textContent = "";
    num1 = Number(displayValue);
    displayValue = 0;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return (Math.round(add(a, b) * 1000) / 1000);
            break;
        case '-':
            return (Math.round(subtract(a, b) * 1000) / 1000);
            break;
        case '*':
            return (Math.round(multiply(a, b) * 1000) / 1000);
            break;
        case '/':
            if(b == 0) {
                return 'snarky message';
                break;
            }
            return (Math.round(divide(a, b) * 1000) / 1000);
            break;
        case '=':
            break;
    }
}

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