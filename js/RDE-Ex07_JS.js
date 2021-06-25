function somar() {
    var n1, n2, res;

    n1 = parseInt(document.getElementById("n1").value)
    n2 = parseInt(document.getElementById("n2").value)

    res = n1 + n2
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${res}`
}