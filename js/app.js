(function() {

    function operante(e) {
        screen.value += e.srcElement.textContent;
        soustract.setAttribute("disabled", false);
        multiply.setAttribute("disabled", false);
        addition.setAttribute("disabled", false);
        disivion.setAttribute("disabled", false);
    }

    function Calcul(e) {
        screen.value = eval(screen.value);
    }


    function Display(e) {
        if (screen.value == 0)
            screen.value = '';
        screen.value += e.srcElement.textContent;
        soustract.removeAttribute("disabled");
        multiply.removeAttribute("disabled");
        disivion.removeAttribute("disabled");
        addition.removeAttribute("disabled");
    }

    function ClearScreen(e) {
        if (e.srcElement.innerHTML == 'CE') {
            memory = screen.value;
            screen.value = 0;
        }
        if (e.srcElement.innerHTML == "C") {
            screen.value = 0;
        }
    }

    let keyboard = document.getElementById('keyboard');
    let touch = keyboard.getElementsByClassName('number');
    let screen = document.getElementById("screen");
    let soustract = document.getElementById("soustract");
    let multiply = document.getElementById("multiply");
    let addition = document.getElementById("addition");
    let disivion = document.getElementById("division");
    let eltCalcul = document.getElementById("calcul");
    let clearC = document.getElementById('clearC');
    let ClearS = document.getElementById('ScreenClear');
    disivion.addEventListener('click', operante, false);
    multiply.addEventListener('click', operante, false);
    addition.addEventListener('click', operante, false);
    soustract.addEventListener('click', operante, false);
    eltCalcul.addEventListener('click', Calcul, false);
    clearC.addEventListener('click', ClearScreen, false);
    ClearS.addEventListener('click', ClearScreen, false);

    for (var i = 0; i < touch.length; i++) {
        touch[i].addEventListener('click', Display, false);
    }

})();