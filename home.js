let clique = true;
function novaBoxCidades (){
    let boxAntiga = document.querySelector('.box-select-cidades');
    let boxNova = document.querySelector('.box-select-cidadesNova');
    let cidadesAntiga = document.querySelectorAll('.botaoEscolhaCidade');
    let cidadesNova = document.querySelectorAll('.botaoEscolhaCidadeNova');
    if(clique){
        boxAntiga.classList.replace('box-select-cidades', 'box-select-cidadesNova');
        cidadesAntiga.forEach(cidade => {
            cidade.classList.replace('botaoEscolhaCidade', 'botaoEscolhaCidadeNova')
        });
        clique = false;
    } else {
        boxNova.classList.replace('box-select-cidadesNova', 'box-select-cidades');
        cidadesNova.forEach(cidade  => {
            cidade.classList.replace('botaoEscolhaCidadeNova', 'botaoEscolhaCidade')
        });
        clique = true;
    }
};