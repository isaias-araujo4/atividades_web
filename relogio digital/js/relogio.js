//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dias = document.querySelector('#dias')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const saudacao = document.querySelector('#saudacao')
const astro = document.querySelector('#astro')

//eventos
setInterval(relogio, 1000)

//função
function relogio(){

    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()
    let dia2 = dia.getDate()
    let mes2 = dia.getMonth() + 1
    let ano2 = dia.getFullYear()

    if(mes2<10){
        mes2="0" + mes2
    }

    if(dia2<10){
        dia2="0" + dia2
    }

    if(hr<10){
        hr="0" + hr
    }

    if(min<10){
        min="0" + min
    }

    if(seg<10){
        seg="0" + seg
    }

    if(hr>=5 && hr<12){
        saudacao.textContent = 'BOM DIA!!'
        astro.src='imagens/sol2.png'
    }else if(hr >=12 && hr<18){
        saudacao.textContent = 'BOA TARDE!!'
        astro.src='imagens/sol2.png'
    }else{
        saudacao.textContent = 'BOA NOITE!!'
        astro.src='imagens/lua2.png'
    }

   

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    dias.textContent = dia2
    mes.textContent = mes2
    ano.textContent = ano2

}