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

let displayValue = "";
let num1 = 0;
let operator = "";
let hasDecimal = false;
const formula = document.getElementById('formula');
const display = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', btnClick);
});

function btnClick (e) {
    //enter number
    if (!(isNaN(Number(e.target.textContent)))) {
        display.textContent += e.target.textContent;
    } 
    //use decimal
    else if(e.target.textContent == '.') {
        if(!hasDecimal) {
            if(display.textContent == '') {
                display.textContent += '0';
            }
            display.textContent += e.target.textContent;
            hasDecimal = true;
        }
    }
    //clear display
    else if (e.target.textContent == 'C'){
        displayValue = "";
        num1 = 0;
        operator = "";
        display.textContent = "";
        formula.textContent = "";
        hasDecimal = false;
    } 
    //backspace
    else if (e.target.textContent == '<-'){
        if(display.textContent == "") {
            return;
        }
        if(display.textContent.substring(display.textContent.length -1) == '.') {
            hasDecimal = false;
        }
        display.textContent = display.textContent.slice(0, -1);
    } 
    //use = sign
    else if (e.target.textContent == '='){
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
    //use operator
    else {
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
        
        operator = e.target.textContent;
        
        display.textContent = "";
        num1 = Number(displayValue);
        displayValue = 0;
    }
}