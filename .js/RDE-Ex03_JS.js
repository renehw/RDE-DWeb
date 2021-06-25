/* Elabore um programa em que solicite ao usuário dois números n1 e n2. Realize a subtração dos dois valores. O programa não deve exibir números negativos. */

var sub, n1, n2;

alert("Está operação é uma subtração entre A e B, por favor insira os valores a seguir.")
n1 = parseFloat(prompt("Informe um valor para A: "));
n2 = parseFloat(prompt("Informe um valor para B: "));



if (n1 > n2) {
    sub = n1 - n2;
    document.write("O resultado da operação é: <br>");
    document.write(n1+" - "+ n2 +" = "+ sub);
} else {
    sub = n2 - n1;
    document.write("O resultado da operação é: <br>");
    document.write(n2+" - "+ n1 +" = "+ sub);
}