let botaoSeta = document.getElementById('selectSeta');
let classeAntiga = document.querySelector('.box-select-cidades');
let classeNova = document.querySelector('.box-select-cidadesNova');
let clique = true;
selectSeta.addEventListener('click', () => {
    if(clique){
        classeAntiga.classList.replace('box-select-cidades', 'box-select-cidadesNova');
        clique = true;
    } else {
        clique = false;
    }
});