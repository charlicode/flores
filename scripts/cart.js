const itens = [
    {
        id: 0,
        name: 'arranjo de flores brancas',
        img: 'https://img.elo7.com.br/product/original/1735A60/arranjo-de-flores-artificiais-arranjo-de-flores.jpg',
        quantidade: 0
    },
    {
        id: 1,
        name: 'arranjo de flores coloridas',
        img: 'https://static.giulianaflores.com.br/images/product/27384gg.jpg',
        quantidade: 0
    },
    {
        id: 2,
        name: 'arranjo de flores vermelhas',
        img: 'https://stack.flowermarket.com.br/floresvip/images/produto/400_1525.jpg',
        quantidade: 0
    },
    {
        id: 3,
        name: 'arranjo de flores azuis',
        img: 'https://static.giulianaflores.com.br/images/product/27174gg.jpg?ims=500x500',
        quantidade: 0
    },
]

iniciarProdutos = () => {
    const containerProducts = document.querySelector(".produtos");
    itens.forEach((item) => {
        containerProducts.innerHTML += `
        <div class="produto">        
            <img id="img" src="${item.img}"
                      alt="imagem-prduto">
            <span class="title-product">${item.name}</span>            
            <input key="${item.id}" type="button" value="comprar" />            
        </div>`;
    });
}
iniciarProdutos();


//criar essa função
atualizaCart = () => {
    const containerCart = document.getElementById("cart");
    containerCart.innerHTML = "";
    
    itens.map((itemzin) => {
        
        if (containerCart != '' & itemzin.quantidade > 0) {
            containerCart.innerHTML += `
                <div class="cart-produto">
                <div class="cart-img">
                        <img src="${itemzin.img}" alt="imagemm produto" />
                    </div>
                    
                        <div class="produto-description">
                            <span class="produto-nome">Produto: ${itemzin.name}</span>
                            <br><span class="qtd">Quantidade: ${itemzin.quantidade}</span>
                            <button>+</button>
                            <button>-</button>
                            <button>remover</button>
                        </div>

                </div>
            `;
        }
    })
}

const produtos = document.querySelectorAll(".produto input");


//tentativa independente de incrementar a quantidade com forEach
produtos.forEach((produto) => {
    produto.addEventListener("click", () => {
        let key = produto.getAttribute("key");
        itens[key].quantidade++;
        atualizaCart();
    })
})