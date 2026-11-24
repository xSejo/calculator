function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1;
let num2;
let operator;

function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return subtract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);

  return operator(num1, num2);
}

function setNumbers() {}
function setOperator() {
  let isOperatorSet = false;
}

const displayText = document.getElementById("displayText");
function updateDisplay(value) {
  displayText.textContent = value;
}

function clearDisplay() {
  displayText.textContent = "";
  [operator, num1, num2] = undefined;
}

const buttons = document.getElementById("buttonContainer");
buttons.addEventListener("click", (e) => {
  let button = e.target.closest("button");
  let value = button.dataset.value;
  updateDisplay(value);
});

// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
// };
