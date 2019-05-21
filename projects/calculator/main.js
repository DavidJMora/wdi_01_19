window.onload = init;

let storeValue = 0;
let secondValue = 0;

function init() {
    let buttons = document.querySelector(".calculatorKeys");
    buttons.addEventListener('click', display)  
}

function display() {
    event.preventDefault();
    
    let e = event.target;

    let display = document.querySelector('.calculatorDisplay');

    if(e <= 9 || display.innerText.includes('.') === false) {
        if(display.innerText === '0') {
            display.innerText = e.innerText;
            storeValue += e.innerText;
        } else {
            display.innerText += e.innerText;
            storeValue += e.innerText;
        }
    }
}