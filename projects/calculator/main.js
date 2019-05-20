window.onload = init;

function init() {
    let buttons = document.querySelector(".calculatorKeys");
    buttons.addEventListener('click', calculate)  
}

function calculate() {
    event.preventDefault();

    let variable = event.target.innerText;
    // let numberToCalc = [];

    document.querySelector('calculatorDisplay').innerText = variable;
}
