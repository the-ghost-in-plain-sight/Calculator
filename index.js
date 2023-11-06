function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return (a - b);
}

function multiply (a, b) {
    return (a * b);
}

function divide (a, b) {
    return (a / b);
}

let theFirst , theSecond = 0;
let theOperator = '';

// the function that performs the calculation when called and returns the sum
function operate (firstNum, operator, secondNum) {
    if (operator == '+') {
        return add(firstNum, secondNum);
    } else if (operator == '-') {
        return subtract(firstNum, secondNum);
    } else if (operator == '*') {
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
    }
}


let numbers = document.querySelectorAll('.numbers');
let display = document.querySelector('.display');
let operators = document.querySelectorAll('.operators');
let dot = document.querySelector('.dot');
let zero = document.querySelector('.zero');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let back = document.querySelector('.back');

// the function that display the numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        
        display.value += numbers[i].textContent;
        let arr = display.value.split('');
        if ((arr.length == 2) && (arr[0] == 0)) {
            let placeHolder = display.value - 0;
            display.value = placeHolder;
        } else {
            display.value = display.value;
        }
        
        
    })
}


// the function that adds dot to the display
dot.addEventListener('click', function () {
    let dis = '';
    dis += display.value;
    let arr = dis.split('');
    if (arr.includes('.')) {
        dis = '';
        arr = [];
    } else {
        display.value += '.';
    }
})

// the function that adds zero to the display.value
zero.addEventListener('click', function () {
    if (display.value == 0) {
        display.value = 0;
    } else {
        display.value += 0;
    }
})

// the function that reads the type of operator
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        theFirst = +display.value;
        theOperator = operators[i].textContent;
        display.value += ' ' + theOperator + ' ';
    })
}

// the function for sum
equal.addEventListener('click', function () {
    if (theOperator == '') {
        return display.value = display.value;
    }
    if (theSecond == 0) {
        theSecond = theFirst;
    }
    display.value = +operate(theFirst, theOperator, theSecond);
    theSecond = 0;
    theOperator = '';
})

clear.addEventListener('click', function () {
    display.value = 0;
    theFirst = 0;
    theOperator = '';
    theSecond = 0;
})

back.addEventListener('click', function () {
    let arr = display.value.split('');
    if (arr.length == 1) {
        display.value = 0;
        arr = [];
    } else {
        arr.pop();
        let str = arr.join('');
        display.value = str;
        arr = [];
    }
})