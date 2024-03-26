function soma (N1,N2){
    return parseInt(N1)+parseInt(N2)
}
function resultadoSoma(){
    var N1 = document.getElementById("N1").value
    var N2 = document.getElementById("N2").value
    var N3 = soma(N1,N2)

    document.getElementById('resultado').innerHTML = N3
}