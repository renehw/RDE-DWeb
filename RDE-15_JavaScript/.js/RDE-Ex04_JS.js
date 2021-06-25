/* Permita ao usuário inserir um valor que exiba a tabuada */

var numTab, numTab2, calc, calc1, i=0, opcao;

opcao = parseInt(prompt(("Escolha entre as opções: 1 - Laço While. 2 - Laço For.")));

switch(opcao) {
    case 1:{
        alert("Calculando a tabuada com laço WHILE")
        numTab = parseInt(prompt("Informe qual a tabuada desejada"));
        document.write("Tabuada do "+numTab+": <br>");
        while(i<=10){
            calc = numTab * i;
            document.write(numTab+" x "+i+" = "+calc+"<br>");
            i = i + 1;
        }
        break;
    }
    case 2:{
        alert("Calculando a tabuada com laço FOR");
        numTab2 = parseInt(prompt("Informe qual a tabuada desejada"));
        document.write("Tabuada do "+numTab2+": <br>");
        for(i; i<=10; i++) {
            calc1 = numTab2 * i;
            document.write(numTab2+" x "+i+" = "+calc1+"<br>");
        }
        break;
    }
    default:{
        alert("Opção Invalida");
        break;
    }
}