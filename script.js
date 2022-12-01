//OPERATION FUNCTIONS: These are designed to take in any number of values, however, I might need to change this. In reality,
//operations are only performed between two numbers
function add(...args){ //The spread operator as the parameter takes in arguments as an array 
    const sum = args.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
    return sum;
}

function subtract(...args){
    const difference = args.reduce((accumulator, currentValue) => {
        return accumulator - currentValue;
    }, args[1]) //Accumulator initial value is the second argument, so that the accumulator never subtracts by its self
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


