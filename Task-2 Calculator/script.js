let currentCalculation = '0';  // Default to '0'
let resultDisplayed = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (resultDisplayed) {
        currentCalculation = value;
        resultDisplayed = false;
    } else if (currentCalculation === '0') {
        currentCalculation = value;
    } else {
        currentCalculation += value;
    }

    display.value = currentCalculation;
}

function clearDisplay() {
    currentCalculation = '0';
    document.getElementById('display').value = currentCalculation;
}

function backspace() {
    currentCalculation = currentCalculation.slice(0, -1);

    if (currentCalculation === '' || currentCalculation === '-') {
        currentCalculation = '0';
    }

    document.getElementById('display').value = currentCalculation;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(currentCalculation);
        display.value = result;
        addToHistory(`${currentCalculation} = ${result}`);
        currentCalculation = result.toString();
        resultDisplayed = true;
    } catch (error) {
        display.value = 'Error';
        currentCalculation = '0';
        resultDisplayed = false;
    }
}

function addToHistory(calculation) {
    const history = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = calculation;
    history.appendChild(listItem);
}

function clearHistory() {
    const history = document.getElementById('history');
    history.innerHTML = '';  // Clear all history entries
}
