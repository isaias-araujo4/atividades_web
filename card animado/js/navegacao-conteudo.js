document.addEventListener('DOMContentLoaded', () => {
    const paginas = document.querySelectorAll('.pagina');
    let paginaAtual = 0;

    paginas[paginaAtual].classList.add('ativo');

    document.querySelector('.seta-direita').addEventListener('click', () => {
        paginas[paginaAtual].classList.remove('ativo');
        paginaAtual = (paginaAtual + 1) % paginas.length;
        paginas[paginaAtual].classList.add('ativo');
    });

    document.querySelector('.seta-esquerda').addEventListener('click', () => {
        paginas[paginaAtual].classList.remove('ativo');
        paginaAtual = (paginaAtual - 1 + paginas.length) % paginas.length;
        paginas[paginaAtual].classList.add('ativo');
    });
});
