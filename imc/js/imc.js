//dom
const peso = document.querySelector("#weight")
const altura = document.querySelector("#height")
const botao = document.querySelector("#calculater")
const resultado = document.querySelector("#resultado")

//eventos
botao.addEventListener('click', () => {
    event.preventDefault()

    p = (peso.value)
    a = (altura.value) / 100

    imc = p / (a * a)

    resultado.textContent = `O seu IMC é ${imc.toFixed(2)}`
})