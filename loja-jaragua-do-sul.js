function apareceFiltros () {
    let menu = document.querySelector('.menuFiltros');
    let box = document.querySelector('.box-filtros');
    let filtosAntiga = document.querySelector('.filtrosCarros');
    let filtrosNova = document.querySelector('.filtrosCarrosNova');
    let icon = document.getElementById('iconMenuFiltos');
    menu.classList.replace('menuFiltros', 'box-filtros');
    filtosAntiga.classList.replace('filtrosCarros', 'filtrosCarrosNova');
    icon.innerHTML = '<img src="" alt="" id="iconMenuFiltos">'
}

let fecharFiltros = document.getElementById('fecharFiltros');
let box = document.querySelector('.box-filtros');
let menu = document.querySelector('.menuFiltros');
fecharFiltros.addEventListener('click', () => {
    box.classList.replace('box-filtros', 'menuFiltros');
    console.log('oi');
});

