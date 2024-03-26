function Botao(){
    var b = document.getElementById("bo")
    b.style.backgroundColor = "#483D8B"
    b.style.color = "#00FF00"
}
function Foco(){
    var f = document.getElementById("Dados")
    f.style.backgroundColor = "#EEE8AA"
    f.style.color = "#D8BFD8"
}
function Mudar(){
    var m = document.getElementById("Myselect").value;
    document.getElementById('texto').innerHTML = "Você selecionou " + m;
}
function showAlert(){
    window.alert("Obrigado por Clicar!");
}