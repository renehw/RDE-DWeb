function enviar(){
    var name = document.getElementById("nome")
    var email = document.getElementById("email")
    var datanasc = document.getElementById("datanasc")

    var validador

    if (name.value != "" && name.value.indexOf(" ") != -1){
        if (email.value != "" && email.value.indexOf("@") != -1) {
            if (datanasc.value != "") {
                alert(name.value+" Agradecemos o seu contato.")
                validador = true
            } else {
                alert("A data de nascimento é obrigatória!")
                validador = false
            }
        } else {
            alert("Digite um email valido")
            validador = false
        }
        
    } else {
        alert("Preencha o seu nome completo")
        validador = false
    }

    return validador;

    
}