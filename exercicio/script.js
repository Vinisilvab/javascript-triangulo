let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
let resultado = document.getElementById("resultado")
let area;
function Aperte()
{
    area = (parceFloat(valor1.value) * parceFloat(valor2.value)) /2
    resultado.innerHTML =(area)
}