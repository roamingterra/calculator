# calculator
Calculator that performs basic math operations

Note: Flow diagram included in the folder of this project 

General Flow:

1.	A first number is typed in (num1 = 1) 
2.	An operation is typed in (operator = '+')
a)	If the equals sign is clicked subsequently, num2 = num1, the operation is performed between num1 and num 2 (operation: 1+1=2), and the answer is displayed (display: 2). Then num1 = 2, num2 = undefined, operator = undefined. GO BACK TO BEGINNING OF STEP 2
b) If another operator is clicked subsequently (operator = '+'), num2 = num1, the operation is performed between num1 and num2 (operation: 1+1=2), and the answer is displayed (display: 2). Then num1 = 2, num2 = undefined, operator = '+'. GO BACK TO BEGINNING OF STEP 2
3.	A second number is typed in (num2 = 2)
a)	If the equals sign is clicked subsequently, the operation is performed between num1 and num2 (operation: 1+2=3), and the answer is displayed (display: 3) Then num1 = 3, num2 = undefined, operator = undefined. GO BACK TO BEGINNING OF STEP 2 
b)	If another operator is clicked (operator = '-'), then the first operation is performed between num1 and num2 (operation: 1+2=3), the answer is displayed, then num1 = 3, num2 = undefined, operator = '-'
4. a) If anything other than another number is clicked, the display is cleared
b) If another number is clicked (num2 = 4), it is displayed (display: 4)
c) If the equals sign is clicked subsequently, the operation is performed between num1 and num2 (operation: 3-4=-1), and the answer is displayed (display: -1) Then num1 = -1, num2 = undefined, operator = undefined. GO BACK TO BEGINNING OF STEP 2 
d) If instead another operator is clicked (operator = 'x'), then the first operation is performed between num1 and num2 (operation: 3-4=-1), and the answer is displayed (display: -1) Then num1 = -1, num2 = undefined, operator = 'x'. GO BACK TO BEGINNING OF STEP 4

Expanded logic:

1. The first number can be multiple digits (obviously), therefor, the first number is only stored in memory once an operator is selected

2. Once an operator is selected, and a second number begins to be typed in, the display is then cleared of num1
Once an operation is performed, the display is cleared, and then the display is filled with the answer of the operation

Future considerations:

1. UI buttons going through the pressing animation when the keyboard shortcut is pressed: 
    I wasn't able to figure this out,
    so I will leave this as a future potential improvement

2. Add a glitch animation to the displayed result when a number is divided by 0: I was initially taking inspiration from the following youtube video: https://www.youtube.com/watch?v=9CCkp_El1So&t=204s. See bellow for my attempt at the code, which was presented as a hover effect. This will also be left as a future potential improvement.

3. The operator functions that make use of reduce methods theoretically could take in an infinite number of arguments because they use the spread operator in the function parameters, when only two arguments can be sent to them at a time. This is not needed, however I decided to include this feature for practice purposes only. These function parameters in the future can be modified.

//Glitch effect attempt
.display .inner-display:hover:before,
.display .inner-display:hover:after {
  content: '0';
  
  position: relative;
  top: 0px;
  left: 0px;
  
}
.display .inner-display:hover:before{
  z-index: -2;
  color: red;
  animation: glitch 0.3s linear 6;
}
.display .inner-display:hover:after{
  z-index: -2;
  color: blue;
  animation: glitch 0.3s linear 6 reverse;
}
@keyframes glitch {
  0% {
    top: 0; 
    left: 0;
  }
  
  20% {
    top: -5px; 
    left: -5px;
  }

  40% {
    top: 5px; 
    left: 5px;
  }

  60% {
    top: -5px; 
    left: 5px;
  }

  80% {
    top: 5px; 
    left: -5px;
  }

  100% {
    top: 0; 
    left: 0;
  }
}

