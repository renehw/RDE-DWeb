/* Funções sem retorno */

function somar (n1, n2){
    var r;

    r = n1 + n2;
    alert("Função de soma sem retorno, resultado " + r);
}

somar(10, 35);


/* Funções com retorno */
function subtrair(n1, n2){
    var r
    r = n1-n2;
    return(r)
}

var resultado;
resultado = subtrair(35, 10);
alert("Função de subtração com retorno, resultado " + resultado);