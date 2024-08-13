function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
