
let isOperatorClicked = false;

const display = document.getElementById("display");

function Displayvalue(input) {
    const operator = ["+", "-", "*", "/"];

    if (operator.includes(input) && !isOperatorClicked) {
        isOperatorClicked = true;
        display.value += input;
    }

    if (isOperatorClicked && operator.includes(input)) {
        return;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
        isOperatorClicked = false
    }
    catch {
        display.value = "";
    }
}

