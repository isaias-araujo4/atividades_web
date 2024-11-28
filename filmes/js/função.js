//doom
const frmPesquisa = document.querySelector("form")
const apikey = 'ef82eb7';
const carregarlista = (json) =>{
    const lista = document.querySelector(".lista");
    lista.innerHTML = '';

    json.Search.forEach(element => {
        console.log(element);

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`

        lista.appendChild(item)
    });
}

//evento
 frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault()

    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa == ""){
        alert('prencha o campo');
        return;
    }

    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${pesquisa}`)
    .then(result => result.json())
    .then(json => carregarlista(json));
}

