var firstNumber;
var secondNumber;
var typeOperation;
var outEl = document.querySelector('#enterForm');
var buttonsOperationClassName = document.querySelectorAll('.button-operation');
var buttonsNumberClassName = document.querySelectorAll('.button');
var result = document.querySelector('#result');

for (var i = 0; i < buttonsOperationClassName.length; i++) {
    buttonsOperationClassName[i].addEventListener('click', onOperationButtonClick);
}

for (var i = 0; i < buttonsNumberClassName.length; i++) {
    buttonsNumberClassName[i].addEventListener('click', onNumberButtonClick);
}

clear.addEventListener('click', clearElements);
result.addEventListener('click', function () { defineOperation() });



function onNumberClick(id) {
    var inEl = document.getElementById(id);
    outEl.value += inEl.value;
}

function onOperatorClick(id) {
    typeOperation = id;
    firstNumber = outEl.value;

    outEl.value = '';
}

function defineOperation() {
    secondNumber = outEl.value;
    if (typeOperation === 'sum') { 
        sumF(firstNumber, secondNumber); 
    } else if (typeOperation === 'diff') { 
        diffF(firstNumber, secondNumber); 
    } else if (typeOperation === 'mult') { 
        multF(firstNumber, secondNumber); 
    } else if (typeOperation === 'divide') { 
        divideF(firstNumber, secondNumber); 
    }
}

function sumF(a, b) {
    var sumF = Number(a) + Number(b);
    outEl.value = sumF;
}

function diffF(a, b) {
    var diff = Number(a) - Number(b);
    outEl.value = diff;
}

function multF(a, b) {
    var mult = Number(a) * Number(b);
    outEl.value = mult;
}

function divideF(a, b) {
    var divide = Number(a) / Number(b);
    outEl.value = divide;
}
function clearElements() {
    var clear = document.querySelector('#clear');
    outEl.value = '';
    firstNumber = '';
    secondNumber = '';
    typeOperation = '';
}

function onOperationButtonClick(eventObject) {
    var clickEl = eventObject.currentTarget;
    var operation = clickEl.id;
    onOperatorClick(operation);
}

function onNumberButtonClick(eventObject) {
    var clickNumberEl = eventObject.currentTarget;
    var clickNumber = clickNumberEl.id;
    onNumberClick(clickNumber);
}

