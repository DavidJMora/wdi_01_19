window.onload = init;

function init() {
    let buttons = document.querySelector(".calculatorKeys");
    buttons.addEventListener('click', calculate)  
}

function calculate() {
    event.preventDefault();

    let numbers = [];
    
    let e = event.target.innerText;

    if(event <= 9 || e === '.') {
        document.querySelector('.calculatorDisplay').innerText = displayedData;
    }
}
