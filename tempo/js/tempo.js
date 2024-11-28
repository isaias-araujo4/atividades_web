//doom

const pesquisa = document.querySelector('.input-cidade')
const lupa = document.querySelector('#lupa')
const nome_cidade = document.querySelector('.cidade')
const tempo = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const key = '78ec951b23d812f1d0e8c027373ea9f7'


lupa.addEventListener('click', buscarcidade)


async function buscarcidade(){

    const cidade = pesquisa.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)

    nome_cidade.textContent = `tempo em ${dados.name}`
    tempo.textContent =  `${(dados.main.temp).toFixed(0)}°C`
    previsao.textContent = `${dados.weather[0].description}`
}

pesquisa.addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.keyCode === 13) {
        // Chama a função buscarcidade
        buscarcidade();
    }
});
