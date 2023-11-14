let endepoint ='https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json'
let produtos = []
let elementoParaInserirProdutos = document.getElementById('produtos__lista')


buscarProdutos()

async function buscarProdutos() {
    let res = await fetch(endepoint)
    produtos = await res.json()
    exibirProdutosNatela(produtos)
  }

  function exibirProdutosNatela(produtos) {
    produtos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML +=  `
        <li class="produtos__item">
        <div class="produtos__content">
            <img src="${produto.img}">
            <div class="produtos__informacoes">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}
                </p>
                <h4>R$ ${produto.valorComDesconto}<s>R$ ${produto.valorSemDesconto}</s></h4>
                <p>Frete GRÁTIS</p>
            </div>
        </div>
    </li>
        `
        console.log = (produto.nome);
    })
  }