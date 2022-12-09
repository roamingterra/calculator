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

    //Round result when the number can fit on in the display
    result = String(result);
    
    if(result.includes('.') && result<1000000000){ 
        //round until length is 9 
        while(result.length>9){
            result = result.slice(0, -1);
        }
        if(result.charAt(result.length - 1)==='.'){
            result = result.slice(0, -1);
        }
        if(result.charAt(result.length - 2)==='.' && result.charAt(result.length - 1)==='0'){
            result = result.slice(0, -2);
        }
    }
    
    //if result length is greater than 999,999,999 convert to scientific notation to fit it in the display
    if(result>999999999){
        result = Number(Number(result).toExponential()).toPrecision(2); //Round scientific notation to 2 digits
        return String(result);
    }

    return result  
}

//CALCULATE FUNCTION: This function allows the calculator to work
function calculator(){

    //Link some html classes to JavaScript variables
    //elements that display information to the user
    const display = document.querySelector('.text'); 
    const sign = document.querySelector('.sign');
    //buttons 
    const numbers = document.querySelectorAll('.num');
    const operators = document.querySelectorAll('.operator');
    const equals = document.querySelector('.equals');
    const clear = document.querySelector('.clear');
    const changeSign = document.querySelector('.change-sign');
    const decimal = document.querySelector('.decimal');
    const percentage = document.querySelector('.percentage');

    //Variable declarations
    let data = {num1: 0, num2: undefined, operator: undefined, justPerformedCalculation: false};
    let num2EnterBegin = true; //Boolean variable that will keep track of if num2 is beginning to be typed in or not

    //Display starting value
    display.textContent = 0;

    //Helper functions
    function numbersDo(number){
        if(display.textContent==='0'){
            //Replace initial zero in display with entered number
            display.textContent = number; //number.className.slice(4);
        }
        else if(data.justPerformedCalculation===true){
            display.textContent = number;
            data.justPerformedCalculation = false;
        }
        else{
            if (data.operator===undefined && data.num2===undefined 
                && display.textContent.length<9){ //A max of 9 digits can be typed into the display
                //Add to display for eventual num1 assignment
                display.textContent += number; //number.className.slice(4);
            }
            else if(data.operator!==undefined && data.num2===undefined && num2EnterBegin===true){
                //Replace display with eventual num2 assignment
                sign.textContent = '';
                display.textContent = number; //number.className.slice(4);
                num2EnterBegin = false;
            }
            else if(data.operator!==undefined && data.num2===undefined && num2EnterBegin===false 
                && display.textContent.length<9){ //A max of 9 digits can be typed into the display
                //Add to display for eventual num2 assignment
                display.textContent += number; //number.className.slice(4);
            } 
        }
    }

    function operatorDo(operator){
        if(operator==='/'){ //Converts the keyboard division input to division readable by the program
            operator = '÷';
        }
        if(operator==='*'){
            operator = 'x'; //Converts the keyboard division input to division readable by the program
        }

        if(data.operator===undefined){
            //Assign operator and assign num1 what is displayed on screen
            data.operator = operator; //operator.className.slice(9);
            data.num1 = +display.textContent;
            if(sign.textContent==='-'){
                data.num1 *= -1;
            }
        } 
        else if(data.operator!==undefined){
            //Perform operation if operator is already defined
            data.num2 = +display.textContent;
            if(sign.textContent==='-'){
                data.num2 *= -1;
            }
            display.textContent = operate(data.operator, data.num1, data.num2);
            //if displayed answer is negative, remove negative from value and turn on negative button
            data.num1 = +display.textContent;

            if(Number(display.textContent)<0){
                display.textContent = display.textContent.slice(1);
            }
            else{
                sign.textContent = '';
            }

            data.num2 = undefined;
            num2EnterBegin = true;
            data.operator = operator; //operator.className.slice(9); //Replace old operator with new operator
        }
    }

    function equalsDo(){
        //Operation when equals is clicked when only num1 and operator are defined
        if (data.num1!==undefined && data.operator!==undefined 
           && data.num2===undefined){
           data.num2 = +display.textContent;
           if(sign.textContent==='-'){
               data.num2 *= -1;
           }
           display.textContent = operate(data.operator, data.num1, data.num2);
           sign.textContent = '';
           if(Number(display.textContent)<0){
               //remove negative from displayed value and turn on negative button
               display.textContent = display.textContent.slice(1);
               sign.textContent = '-';
           }
           data.num1 = display.textContent;
           data.num2 = undefined;
           num2EnterBegin = true;
           data.operator = undefined;
           data.justPerformedCalculation = true;
       }
   
       //Operation when equals is clicked when all data is known, and number displayed isn't 0
       if (data.num1!==undefined && data.operator!==undefined && data.num2 !==undefined){
           display.textContent = operate(data.operator, data.num1, data.num2);
           data.num1 = display.textContent;
           data.num2 = undefined;
           num2EnterBegin = true;  
           data.operator = undefined;
           data.justPerformedCalculation = true;
       }
   }

   function percentageDo(){
    let percentage = Number(display.textContent) / 100;
    if(percentage.toString().includes('e')){
        percentage = (percentage).toPrecision(2); //Round scientific notation to 2 digits
    }
    else if(percentage.toString().length>9){
        percentage = Number(Number(percentage).toExponential()).toPrecision(2); //Round scientific notation to 2 digits
    }
    display.textContent = percentage; 
    }

    function decimalDo(){
        //if display doesn't contain decimal, add one to display
        if(display.textContent.indexOf('.') === -1){
            display.textContent += '.';
        }
    }

    function changeSignDo(){
        if(sign.textContent==='' && display.textContent!=='0'){
            sign.textContent = '-';  
        }
        else if(sign.textContent==='-' && display.textContent!=='0'){
            sign.textContent = '';
        }
    }

    function clearDo(){
        display.textContent = 0;
        data.num1 = 0;
        data.num2 = undefined;
        num2EnterBegin = true;
        data.operator = undefined;
        sign.textContent = '';
        data.justPerformedCalculation = false;
    }

    //Event listeners
    //UI button event listeners
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            numbersDo(number.className.slice(4));
        })
    })

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            operatorDo(operator.className.slice(9));
        })
    })

    equals.addEventListener('click', equalsDo);

    percentage.addEventListener('click', percentageDo);

    decimal.addEventListener('click', decimalDo);

    changeSign.addEventListener('click', changeSignDo);

    clear.addEventListener('click', clearDo);

    //Keyboard event listener
    document.addEventListener('keyup', (e) => {
        if(Number(e.key) >= 0 && Number(e.key) <=9){
            numbersDo(e.key);
        }
        else if(e.key==="+"||e.key==="-"||e.key==="*"||e.key==="/"){
            operatorDo(e.key);
        }
        else if(e.key==="=" || e.key==="Enter"){
            equalsDo();
        }
        else if(e.key==="%"){
            percentageDo();
        }
        else if(e.key==="."){
            decimalDo();
        }
        else if(e.key==="_"){
            changeSignDo();
        }
        else if(e.key==="Backspace"){
            clearDo();
        }
    });
}

//INVOKE CALCULATE FUNCTION
calculator();


