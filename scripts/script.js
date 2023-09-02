

//percorrer cada item do menu e alterar a classe
/*
function linkItem() {
    itensMenu.forEach((item) => {
        item.classList.remove('active')
    })
    this.classList.add('active')
}

itensMenu.forEach((item) => {

    item.addEventListener('click', linkItem)
})

//expandir o menu
const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('.menuMobile')
})*/

const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('#btn-menu');
const itensMenu = document.querySelectorAll('.menu-item');


//expande o menu clicando no icone com a funçao 'toggle' que add e remove a classe 'menuClick'
btnMenu.addEventListener("click", () => {
    menu.classList.toggle('menuClick');
})

//escondendo menu após alguma seleção 
itensMenu.forEach((itemMenu) => {
    itemMenu.addEventListener("click", () => {
        menu.classList.toggle('menuClick');
    })

})





//alternando as imagens dos produtos
const arranjosImg = document.querySelector(".container-carrossel");
const arranjo = document.querySelectorAll("#img-produtos img");

let idArranjo = 0;

function carrossel() {
    idArranjo++;

    if (idArranjo > arranjo.length - 1) {
        idArranjo = 0;
    }

    arranjosImg.style.transform = `translateY(${-idArranjo * 490}px)`;
}

setInterval(carrossel, 1700);