//dom
const fundo = document.querySelector("body")
const lua = document.querySelector("#lua")
const sol = document.querySelector("#sol")

//evento
sol.addEventListener('click', claro)
lua.addEventListener('click', escuro)

//função
function claro(){
    fundo.className = claro
}

function escuro(){
    fundo.className = escuro
}