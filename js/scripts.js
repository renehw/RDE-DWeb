var nome;

nome = prompt(("Informe seu nome: "))

document.write("Olá "+nome+"! sejá bem vindo ao meu site de desenvolvimento web.");

function noExter(){
    var idade;
    idade = prompt("Escreva sua idade")
    if(idade >= 18) {
        alert("Sua idade é "+idade+" você já pode participar das eleições! :)")
    } else if (idade > 15 && idade < 18){
        alert("Sua idade é "+idade+" você já pode participar das eleições se quiser! :)")
    } else (
        alert("Sua idade é "+idade+" você não pode participar das eleições! :(")
    )
}

function somar() {
    var n1, n2, res;

    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    res = n1 + n2
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${res}`
}

function sub() {
    var sub, n1, n2;

    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    if (n1 > n2) {
        sub = n1 - n2;
        document.getElementById("sub").innerHTML = `O resultado da subtração é ${sub}`
    } else {
        sub = n2 - n1;
        document.getElementById("sub").innerHTML = `O resultado da subtração é ${sub}`
    }
}

function mult() {
    var calc, numTab;

    numTab = parseInt(document.getElementById("numTab").value)

    if(numTab == "") {
        document.getElementById("tabuadas").hidden = true
    } else {
        document.getElementById("tabuadas").hidden = false
    }

    for(var i=0; i<=10; i++) {
        calc = numTab * i;
        document.getElementById("numero"+i).innerHTML = numTab
        document.getElementById("result"+i).innerHTML = calc
    }
}

function array(){
    var v = [4,8,7,6];

    alert(v);
    v[4] = 5
    alert("Adicionado o valor "+v[4]+" na lista: "+v);
}