
document.getElementById('button1').addEventListener('click', sum);
document.getElementById('button2').addEventListener('click', subtract);
document.getElementById('button3').addEventListener('click', multiply);
document.getElementById('button4').addEventListener('click', divide);
document.getElementById('button5').addEventListener('click', clearPara);

function sum() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let sum = num1 + num2;
    document.querySelector('p').innerHTML = "sum = " + sum;
}


function subtract() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let subtract = num1 - num2;
    document.querySelector('p').innerHTML = "subtraction = " + subtract;
}

function multiply() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let multiply = num1 * num2;
    document.querySelector('p').innerHTML = "Multiplication = " + multiply;
}

function divide() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let divide = num1 / num2;
    document.querySelector('p').innerHTML = "division = " + divide;
}

function clearPara() {
    document.querySelector('p').innerHTML = "";
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}