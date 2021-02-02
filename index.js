import {add, subtract, multiply, divide} from './operations.js';

/* Large section/structural components */

const body = document.querySelector('body');

const largeContainer = document.createElement('div');
body.appendChild(largeContainer);

const displayContainer = document.createElement('div');
largeContainer.appendChild(displayContainer);

const buttonContainer = document.createElement('div');
largeContainer.appendChild(buttonContainer);

const lineBreak = document.createElement('br');


/* Numerical buttons appended to the DOM */

const number7Button = document.createElement('button');
number7Button.textContent = '7';
number7Button.classList.add('numberButton');
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
number3Button.addEventListener('click', () => {
  assign('3')
  display.textContent = displayString;
  console.log('operand1: ', operand1)
  console.log('operand2: ', operand2)
})
buttonContainer.appendChild(number3Button);



/* Operations buttons appended to DOM */

const plusButton = document.createElement('button');
plusButton.textContent = '+';
plusButton.classList.add('operationButton');
plusButton.addEventListener('click', () => {
  operate(add);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(plusButton);

const minusButton = document.createElement('button');
minusButton.textContent = '-';
minusButton.classList.add('operationButton');
minusButton.addEventListener('click', () => {
  operate(subtract);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(minusButton);

const multiplyButton = document.createElement('button');
multiplyButton.textContent = 'x';
multiplyButton.classList.add('operationButton');
multiplyButton.addEventListener('click', () => {
  operate(multiply);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(multiplyButton);

const divideButton = document.createElement('button');
divideButton.textContent = '÷';
divideButton.classList.add('operationButton');
divideButton.addEventListener('click', () => {
  operate(divide);
  display.textContent = displayString;
  console.log('operator: ', operator);
});
buttonContainer.appendChild(divideButton);

const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.classList.add('clearButton');
clearButton.addEventListener('click', () => {
  clear();
  display.textContent = displayString;
});
buttonContainer.appendChild(clearButton);

const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
equalsButton.classList.add('equalsButton');
equalsButton.addEventListener('click', () => {
  evaluate(operand1, operand2, operator);
  display.textContent = displayString;
})
buttonContainer.appendChild(equalsButton);



/* Calculator functionality */

let operand1 = null;
let operand2 = null;
let operator = null;
let solution = null;

function assign(inputString) {
  if (!operand1) {
    operand1 = inputString;
    displayString += operand1;
    console.log('displayString: ', displayString)
  } else if (operand1 && !operand2) {
    operand2 = inputString;
    displayString += operand2;
    console.log('displayString: ', displayString)
  }
}

function operate(inputFunc) {
  if (!operator) {
    operator = inputFunc;
  }
  if (inputFunc.name === 'add') {
    displayString += ' + ';
    console.log('displayString: ', displayString)
  } else if (inputFunc.name === 'subtract') {
    displayString += ' - ';
    console.log('displayString: ', displayString)
  } else if (inputFunc.name === 'multiply') {
    displayString += ' x ';
    console.log('displayString: ', displayString)
  } else if (inputFunc.name === 'divide') {
    displayString += ' ÷ ';
    console.log('displayString: ', displayString)
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




/* Display functionality */

let displayString = ''

const display = document.createElement('div');
display.type = 'text';
display.textContent = displayString;
display.classList.add('display');
displayContainer.appendChild(display);
displayContainer.appendChild(lineBreak);




/* Notes

flexbox tasks:
 - only three buttons per row
 - adjust size of equals button as needed
 - adjust width of display as needed
 - center it all and resize when done

as soon as number 2 is initialized, the next non-numerical key that is pressed will trigger the operation to occur (answer will possibly be assigned to number 1 and displayed?)

decimal point button - only works if a checker variable is false (user cannot press it more than once)


*/
