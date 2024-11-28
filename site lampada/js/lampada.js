//dom
const lampada = document.querySelector('#lampada')
const bt01 = document.querySelector('#btligar')
const bt02 = document.querySelector('#btdesligar')

//evento
bt01.addEventListener('click', ligar)
bt02.addEventListener('click', desligar)
lampada.addEventListener('dblclick', quebrar)
lampada.addEventListener('click', voltar)

//função
function ligar(){
    lampada.src = 'imagens/acesa.gif'
}

function desligar(){
    lampada.src = 'imagens/apagada.gif'
}

function quebrar(){
    lampada.src = 'imagens/quebrada.jpg'
}

function voltar(){
    lampada.src = 'imagens/apagada.gif'
}