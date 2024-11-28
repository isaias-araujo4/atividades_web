//dom
const nome = document.querySelector("#nome")
const nota1 = document.querySelector("#nota1")
const nota2 = document.querySelector("#nota2")
const nota3 = document.querySelector("#nota3")
const botao = document.querySelector("#bt")
const situacao = document.querySelector("#situacao")
//evento
botao.addEventListener('click', calcular)

//função
function calcular() {

    n1 = Number( nota1.value)
    n2 = Number( nota2.value)
    n3 = Number( nota3.value)
    

    resultado = (n1 + n2 + n3) / 3

    if (resultado > 10) {
        resultado = 10
    }
    
    if (resultado >= 5) {
        situacao.textContent = `${nome.value} ,Sua média é ${resultado.toFixed(1)} ,Aprovado`
    } else {
        situacao.textContent = `${nome.value} Sua média é ${resultado.toFixed(1)} Reprovado`
    }

}