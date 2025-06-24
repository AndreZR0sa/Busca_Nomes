const input = document.getElementById('searchInput');
const listItems = document.querySelectorAll('#nameList li');

input.addEventListener('input', () => {
    const pesquisa = input.value.toLowerCase();


    listItems.forEach(item => {
        const texto = item.textContent;
        const textoP = texto.toLowerCase();

        if (pesquisa && textoP.includes(pesquisa)) {
            const comeco = textoP.indexOf(pesquisa);
            const fim = comeco + pesquisa.length;
            const destacado = `${texto.substring(0, comeco)}<b>${texto.substring(comeco, fim)}</b>${texto.substring(fim)}`;
            item.innerHTML = destacado;
        } else {
            item.innerHTML = texto;
        }
    });
})