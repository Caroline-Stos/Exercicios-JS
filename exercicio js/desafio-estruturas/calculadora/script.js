
let operando1 = "";
let operando2 = "";
let operador = "";

// Funções para realizar operações matemáticas
function adicionarNumero(numero){

    if(operador === ''){
        operando1 += numero;
        document.getElementById('resultado').value = operando1;
    } else {
        operando2 += numero;
        document.getElementById('resultado').value = operando2;
    }
}

