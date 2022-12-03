# calculator
Calculator that performs basic math operations

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


