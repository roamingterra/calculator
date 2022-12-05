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
    if(quotient===Infinity){ //A number divided by zero actually isn't infinity. 
                             //The answer of a number divided by an incredibly small number tends 
                             //to infinity, but a number divided by zero is undefined
        return 'nice';
    }
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
        case '÷':
            result = divide(num1, num2);
            break;
        default:
            result = 0;
    }
    const resultStr = String(result);
    //Round result to maximum 7 decimal places
    if(resultStr.includes('.')){
        if (resultStr.split('.')[1].length>7){
            return Math.round(result * 10000000)/10000000;
        }
    }
    return result;
}

//CALCULATE FUNCTION: This function allows the calculator to work
function calculator(){

    //Link some html classes to JavaScript variables
    const display = document.querySelector('.display');
    const numbers = document.querySelectorAll('.num');
    const operators = document.querySelectorAll('.operator');
    const equals = document.querySelector('.equals');
    const clear = document.querySelector('.clear');


    //Variable declarations
    let data = {num1: 0, num2: undefined, operator: undefined};
    let num2EnterBegin = true; //Boolean variable that will keep track of if num2 is beginning to be typed in or not

    //Display starting value
    display.textContent = 0;

    //Event listeners
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            
            if(display.textContent==='0'){
                //Replace initial zero in display with entered number
                display.textContent = number.className.slice(4);
            }
            else{
                if (data.operator===undefined && data.num2===undefined){
                    //Add to display for eventual num1 assignment
                    display.textContent += number.className.slice(4);
                }
                else if(data.operator!==undefined && data.num2===undefined && num2EnterBegin===true){
                    //Replace display with eventual num2 assignment
                    display.textContent = number.className.slice(4);
                    num2EnterBegin = false;
                }
                else if(data.operator!==undefined && data.num2===undefined && num2EnterBegin===false){
                    //Add to display for eventual num2 assignment
                    display.textContent += number.className.slice(4);
                } 
            }
        })
    })

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            if(data.operator===undefined){
                //Assign operator and assign num1 what is displayed on screen
                data.operator = operator.className.slice(9);
                data.num1 = +display.textContent;
            } 
            else if(data.operator!==undefined){
                //Perform operation if operator is already defined
                data.num2 = +display.textContent;
                display.textContent = operate(data.operator, data.num1, data.num2);
                data.num1 = +display.textContent;
                data.num2 = undefined;
                num2EnterBegin = true;
                data.operator = operator.className.slice(9); //Replace old operator with new operator
            }
        })
    })

    equals.addEventListener('click', () => {
        //Operation when equals is clicked when only num1 and operator are defined
        if (data.num1!==undefined && data.operator!==undefined 
            && data.num2===undefined){
            data.num2 = +display.textContent;
            display.textContent = operate(data.operator, data.num1, data.num2);
            data.num1 = display.textContent;
            data.num2 = undefined;
            num2EnterBegin = true;
            data.operator = undefined;
        }
    
        //Operation when equals is clicked when all data is known, and number displayed isn't 0
        if (data.num1!==undefined && data.operator!==undefined && data.num2 !==undefined){
            display.textContent = operate(data.operator, data.num1, data.num2);
            data.num1 = display.textContent;
            data.num2 = undefined;
            num2EnterBegin = true;  
            data.operator = undefined;
        }
    })

    clear.addEventListener('click', () => {
        display.textContent = 0;
        data.num1 = 0;
        data.num2 = undefined;
        num2EnterBegin = true;
        data.operator = undefined;
    })
}

//INVOKE CALCULATE FUNCTION
calculator();
