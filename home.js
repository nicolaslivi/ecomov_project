let clique = true;
function novaBoxCidades (){
    let boxAntiga = document.querySelector('.box-select-cidades');
    let boxNova = document.querySelector('.box-select-cidadesNova');
    let cidadesAntiga = document.querySelectorAll('.botaoEscolhaCidade');
    let cidadesNova = document.querySelectorAll('.botaoEscolhaCidadeNova');
    let scrowAntigo = document.querySelector('.scrowBoxCidades');
    let scrowNovo = document.querySelector('.scrowBoxCidadesNova')
    if(clique){
        boxAntiga.classList.replace('box-select-cidades', 'box-select-cidadesNova');
        cidadesAntiga.forEach(cidade => {
            cidade.classList.replace('botaoEscolhaCidade', 'botaoEscolhaCidadeNova')
        });
        scrowAntigo.classList.replace('scrowBoxCidades', 'scrowBoxCidadesNova');
        clique = false;
    } else {
        boxNova.classList.replace('box-select-cidadesNova', 'box-select-cidades');
        cidadesNova.forEach(cidade  => {
            cidade.classList.replace('botaoEscolhaCidadeNova', 'botaoEscolhaCidade')
        });
        scrowNovo.classList.replace('scrowBoxCidadesNova', 'scrowBoxCidades');
        clique = true;
    }
};