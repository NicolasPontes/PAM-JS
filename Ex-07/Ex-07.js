function funcional(str){
    return str.toUpperCase()
}
function CaixaAlta(){
    var x = document.getElementById('textoMin').value   
    var r = funcional(x)
    document.getElementById('textoMax').innerHTML = r
}