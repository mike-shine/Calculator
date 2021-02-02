import {add, subtract, multiply, divide} from './operations.js';

/* Large section/structural components */

const body = document.querySelector('body');

const largeContainer = document.createElement('div');
largeContainer.classList.add('largeContainer');
body.appendChild(largeContainer);

const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');
largeContainer.appendChild(displayContainer);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
largeContainer.appendChild(buttonContainer);

const lineBreak = document.createElement('br');






/* Numerical buttons appended to the DOM */

const number7Button = document.createElement('button');
number7Button.textContent = '7';
number7Button.classList.add('numberButton');
number7Button.classList.add('rowTwo');
number7Button.addEventListener('click', () => {
  assign('7')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number7Button);


const number8Button = document.createElement('button');
number8Button.textContent = '8';
number8Button.classList.add('numberButton');
number8Button.classList.add('rowTwo');
number8Button.addEventListener('click', () => {
  assign('8')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number8Button);


const number9Button = document.createElement('button');
number9Button.textContent = '9';
number9Button.classList.add('numberButton');
number9Button.classList.add('rowTwo');
number9Button.addEventListener('click', () => {
  assign('9')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number9Button);

buttonContainer.appendChild(lineBreak);

const number4Button = document.createElement('button');
number4Button.textContent = '4';
number4Button.classList.add('numberButton');
number4Button.classList.add('rowThree');
number4Button.addEventListener('click', () => {
  assign('4')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number4Button);


const number5Button = document.createElement('button');
number5Button.textContent = '5';
number5Button.classList.add('numberButton');
number5Button.classList.add('rowThree');
number5Button.addEventListener('click', () => {
  assign('5')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number5Button);


const number6Button = document.createElement('button');
number6Button.textContent = '6';
number6Button.classList.add('numberButton');
number6Button.classList.add('rowThree');
number6Button.addEventListener('click', () => {
  assign('6')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number6Button);

buttonContainer.appendChild(lineBreak);

const number1Button = document.createElement('button');
number1Button.textContent = '1';
number1Button.classList.add('numberButton');
number1Button.classList.add('rowFour');
number1Button.addEventListener('click', () => {
  assign('1')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number1Button);


const number2Button = document.createElement('button');
number2Button.textContent = '2';
number2Button.classList.add('numberButton');
number2Button.classList.add('rowFour');
number2Button.addEventListener('click', () => {
  assign('2')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number2Button);


const number3Button = document.createElement('button');
number3Button.textContent = '3';
number3Button.classList.add('numberButton');
number3Button.classList.add('rowFour');
number3Button.addEventListener('click', () => {
  assign('3')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number3Button);

const number0Button = document.createElement('button');
number0Button.textContent = '0';
number0Button.classList.add('numberButton');
number0Button.classList.add('rowFive');
number0Button.addEventListener('click', () => {
  assign('0')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number0Button);








/* Non-numerical buttons appended to DOM */

const plusButton = document.createElement('button');
plusButton.textContent = '+';
plusButton.classList.add('operationButton');
plusButton.classList.add('rowFour');
plusButton.addEventListener('click', () => {
  operate(add);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(plusButton);

const minusButton = document.createElement('button');
minusButton.textContent = '-';
minusButton.classList.add('operationButton');
minusButton.classList.add('rowThree');
minusButton.addEventListener('click', () => {
  operate(subtract);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(minusButton);

const multiplyButton = document.createElement('button');
multiplyButton.textContent = 'x';
multiplyButton.classList.add('operationButton');
multiplyButton.classList.add('rowTwo');
multiplyButton.addEventListener('click', () => {
  operate(multiply);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.textContent = '÷';
divideButton.classList.add('operationButton');
divideButton.classList.add('rowOne');
divideButton.addEventListener('click', () => {
  operate(divide);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(divideButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.classList.add('clearButton');
clearButton.classList.add('rowOne');
clearButton.addEventListener('click', () => {
  clear();
  display.textContent = displayString;
});
buttonContainer.appendChild(clearButton);

const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
equalsButton.classList.add('equalsButton');
equalsButton.classList.add('rowFive');
equalsButton.addEventListener('click', () => {
  evaluate(operand1, operand2, operator);
  display.textContent = displayString;
})
buttonContainer.appendChild(equalsButton);

const decimalButton = document.createElement('button');
decimalButton.textContent = '.';
decimalButton.classList.add('operationButton');
decimalButton.classList.add('rowFive');
decimalButton.addEventListener('click', () => {
  addDecimalPoint(operand2);
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
  console.log('displayString: ', displayString);
})
buttonContainer.appendChild(decimalButton);







/* Calculator functionality */

let operand1 = null;
let operand2 = null;
let operator = null;
let solution = null;

function assign(inputString) {
  if (!operator) {
    Boolean(operand1) ? operand1 += inputString : operand1 = inputString;
    displayString = operand1;
    console.log('displayString: ', displayString)
  } else if (operand1 && operator) {
    Boolean(operand2) ? operand2 += inputString : operand2 = inputString;
    displayString = '';
    displayString = operand2;
    console.log('displayString: ', displayString)
  }
}

function operate(inputFunc) {
  if (!operator) {
    operator = inputFunc;
  }
}

function evaluate(input1, input2, mathOperation) {
  input1 = Number(input1);
  input2 = Number(input2);
  solution = mathOperation(input1, input2);
  displayString = solution.toString();
  console.log('solution: ', solution);
  console.log('displayString: ', displayString)
}

function clear() {
  operand1 = null;
  operand2 = null;
  operator = null;
  solution = null;
  displayString = '';
  console.log('operand1: ', operand1);
  console.log('operand2: ', operand2);
  console.log('operator: ', operator);
  console.log('solution: ', solution);
}

function addDecimalPoint(input) {
  if(operand2) {
    if (operand2.indexOf('.') === -1) {
      operand2 += '.';
      displayString += '.';
    }
  } else {
    if (operand1.indexOf('.') === -1) {
      operand1 += '.';
      displayString += '.';
    }
  }
  display.textContent = displayString;
}

/* Display functionality */

let displayString = ''

const display = document.createElement('div');
display.type = 'text';
display.textContent = displayString;
display.classList.add('display');
displayContainer.appendChild(display);
displayContainer.appendChild(lineBreak);










/* Notes


what the heck is happening with decimal subtraction...?


flexbox tasks:

 - center display and buttons (indiv. containers, or largeContainer?)
 - decide on width of row
 - Add all buttons first?

 - only three buttons per row
 - adjust size of equals button as needed
 - adjust width of display as needed
 - center it all and resize when done


 features to be added:

 - Create functionality that allows users to chain operations
 - +/- button to change sign
 - Backspace button to allow the user to undo a mistake without clearing everything


*/
