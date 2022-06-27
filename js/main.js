let display = document.querySelector('input[type="text"]');
let displayResult = "";

let btns = document.querySelectorAll('input[type="button"]');

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.value === "=") {
      compute();
    } else if (
      e.target.value === "-" ||
      e.target.value === "+" ||
      e.target.value === "/" ||
      e.target.value === "*"
    ) {
      chooseOperation(e.target.value);
    } else if (e.target.value === "CE") {
      deleteValue();
    } else if (e.target.value === "C") {
      clear();
    } else {
      appendNumber(e.target.value);
    }
  });
});

const clear = () => {
  displayResult = "";
  updateDisplay();
};

const deleteValue = () => {
  displayResult = display.value.slice(0, -1);
  updateDisplay();
};

const appendNumber = (number) => {
  displayResult += number;
  updateDisplay();
};

const chooseOperation = (operation) => {
  displayResult += " " + operation + " ";
  updateDisplay();
};

const compute = () => {
  displayResult = eval(display.value);
  updateDisplay();
};

const updateDisplay = () => {
  display.value = displayResult;
};
