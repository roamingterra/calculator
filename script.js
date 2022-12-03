//MATH FUNCTIONS: These are designed to take in any number of values, however, I might need to change this. In reality,
//operations are only performed between two numbers
function add(...args){ //The spread operator as the parameter takes in arguments as an array 
    const sum = args.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    return sum;
}

function subtract(...args){
    const difference = args.reduce((accumulator, currentValue, currentIndex) => {
        if(currentIndex===0){
            return currentValue
        }
        return accumulator - currentValue;
    }, 0)
    return difference;
}

function multiply(...args){
    const product = args.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    }, 1)
    return product;
}

function divide(...args){
    const quotient = args.reduce((accumulator, currentValue, currentIndex) => {
        if(currentIndex===0){
            return currentValue
        }
        return accumulator / currentValue;
    }, 1)
    return quotient;
}

//OPERATOR FUNCTION: Envokes the appropriate math function based on the operator argument
function operate(operator, num1, num2){
    let result;
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 0;
    }
    return result;
}

//DISPLAY POPULATOR FUNCTIONS: Numbers are displayed when clicked

//Link some html classes to JavaScript variables
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
//Variable declarations
let displayStorage;
let data = {num1: 0, num2: undefined, operator: undefined};

//Create a clicking event listener for number buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        //If data.operator is undefined, add to num1

        //If data.operator is not undefined, add to num2

        //Add to display function
        display.textContent += number.className.slice(4);
        //Store what is being displayed in a variable
        displayStorage = display.textContent;
    })
})

//Create a clicking event listener for operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        //If data.operator is undefined, add new operator to data
        //Add operator to data
        data.operator = operator.className.slice(9);

        //If data.operator is not undefined, perform operation
        //num1=value displayed
        //operator= new entered operator
    })
})





