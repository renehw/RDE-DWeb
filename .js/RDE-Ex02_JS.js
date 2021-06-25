var n1, n2, n3, n4, frase, soma1, soma2;

frase = "Exemplo de soma";
n1 = 9;
n2 = 14.5;
soma = n1+n2;
alert(frase);
alert("O valor da soma é: "+ soma);
document.write("<h2>A soma é: "+soma+"<h2>");

/* Soma de A e B com valores reais */
n1 = parseFloat(prompt("Informe um valor para A:"));
n2 = parseFloat(prompt("Informe um valor para B:"));
soma1 = n1 + n2
alert("O valor da soma de A + B é : "+soma1);
document.write("O valor de "+n1+" + "+n2+" = " + soma1+"<br>");

/* Soma de C e D com valores inteiros */
n3 = parseInt(prompt("Informe um valor para C:"));
n4 = parseInt(prompt("Informe um valor para D:"));
soma2 = n3 + n4
alert("O valor da soma de A + B é : "+soma2);
document.write("O valor de "+n3+" + "+n4+" = " + soma2+"<br>");