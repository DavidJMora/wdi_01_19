window.onload = init;

function init() {
    let buttons = document.querySelector(".calculatorKeys");
    buttons.addEventListener('click', calculate)  
}

function calculate() {
    event.preventDefault();
    
    let e = event.target.innerText;
    
    let display = document.querySelector('.calculatorDisplay');

    if(e <= 9 || display.innerText.includes('.') === false) {
        if(display.innerText === '0') {
            display.innerText = e;
        } else{
            display.innerText += e;
        }
    }
}
