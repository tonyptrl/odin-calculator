let operand1 = null;
let operand2 = null;
let selectedOperator = null;
let isOperatorPressed = false;
let isEqualPressed = false;
let displayValue = "0";
const display = document.querySelector(".js-display");

function resetCalculation() {
  operand1 = null;
  operand2 = null;
  selectedOperator = null;
  isOperatorPressed = false;
  isEqualPressed = false;
  displayValue = "0";
  display.textContent = "0";
};

function updateDisplay(number) {
  if (displayValue === "0") {
    displayValue = "";
  }
  if (isOperatorPressed) {
    displayValue = "";
    isOperatorPressed = false; 
  }
  displayValue += number;
  display.textContent = displayValue;
}

function storeOperator(currentOperator) {
  storeOperand1();
  storeOperand2();
  selectedOperator = currentOperator;
  isOperatorPressed = true;
};

function storeOperand1() {
  if (operand1 === null) {
    operand1 = displayValue;
  };
};

function storeOperand2() {
  if (operand1 !== null && selectedOperator !== null && isEqualPressed === false) {
    operand2 = displayValue;
    operand1 = displayResult();
  } else if (operand1 !== null && selectedOperator !== null && isEqualPressed === true) {
    operand2 = displayValue;
  };
};

function calculateTotal() {
 isEqualPressed = true;
 storeOperand2();
 displayResult();
 isEqualPressed = false;
};

function displayResult() {
  return display.textContent = calculateResult(operand1, operand2, selectedOperator);
}

function add(a, b) {
  return Number(a) + Number(b);
};

function subtract(a, b) {
  return Number(a) - Number(b);
};

function multiply(a, b) {
  return Number(a) * Number(b);
};

function divide(a, b) {
  if (b === 0) {
    return "Nice try lol";
  };
  return Number(a) / Number(b);
};

function calculateResult(operand1, operand2, selectedOperator) {
  operand1 = Number(operand1);
  operand2 = Number(operand2);
  if (selectedOperator === "+") {
    return add(operand1, operand2);
  } else if (selectedOperator === "-") {
    return subtract(operand1, operand2);
  } else if (selectedOperator === "*") {
    return multiply(operand1, operand2);
  } else if (selectedOperator === "/") {
    return divide(operand1, operand2);
  };
};