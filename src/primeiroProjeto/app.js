let botao = document.querySelector('button')
botao.addEventListener('click' , somarUm)

function somarUm() {
    let elementoh3 = document.querySelector('h3')
    let valorAtual = parseInt(elementoh3.textContent)
    let novoValor = valorAtual + 1
    elementoh3.textContent = novoValor
    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)

    elementoh3.style.color = `rgb(${r}, ${g}, ${b})`
}