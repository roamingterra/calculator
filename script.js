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
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');


//Variable declarations
let data = {num1: 0, num2: undefined, operator: undefined};
//display starting value
display.textContent = 0;

//Create a clicking event listener for number buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        //If display=0, replace display
        if(display.textContent==='0'){
            display.textContent = number.className.slice(4);
        }
        //Else if display!=0, add to display
        else{
            //Add to display
             display.textContent += number.className.slice(4);
        }
    })
})

//Create a clicking event listener for operator buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        //If data.operator is undefined, add new operator to data
        if(data.operator===undefined){
            //Add operator to data
            data.operator = operator.className.slice(9);
            //Add what is displayed to num1
            data.num1 = +display.textContent;
        } 
        //If data.operator is not undefined, perform operation
        else if(data.operator!==undefined){
            //Add what is displayed to num2
            data.num2 = +display.textContent;
            //Perform operation and display result 
            display.textContent = operate(data.operator, data.num1, data.num2);
            //Make result=num1
            data.num1 = +display.textContent;
            //Make num2=undefined
            data.num2 = undefined;
            //Replace old operator with new operator
            data.operator = operator.className.slice(9);
        }
    })
})

//Create a clicking event listener for the equals button
equals.addEventListener('click', () => {
    //If num1 is not undefined, operator is not undefined, and num2 is undefined,
    //num2=num1
    //operation performed between num1 and num2
    //display result
    //num1=displayed result
    //num2=undefined

    //If num1 is not undefined, operator is not undefined, and num2 is not undefined
    //operation performed between num1 and num2
    //display result
    //num1=displayed result
    //num2=undefined
})

//Create a clicking event for the clear button
clear.addEventListener('click', () => {
    display.textContent = 0;
    data.num1 = 0;
    data.num2 = undefined;
    data.operator = undefined;
})




