let botaoSeta = document.getElementById('selectSeta');
let clique = true;
botaoSeta.addEventListener('click', () => {
    let classeAntiga = document.querySelector('.box-select-cidades');
    let classeNova = document.querySelector('.box-select-cidadesNova');
    if(clique){
        classeAntiga.classList.replace('box-select-cidades', 'box-select-cidadesNova');
        clique = false;
    } else {
        classeNova.classList.replace('box-select-cidadesNova', 'box-select-cidades');
        clique = true;
        console.log('estou aqui')
    }
});