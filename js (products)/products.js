/* adendo - Nenhum método de array utilizado aqui muda o array original,
incluindo o forEach() */
let containerProdutos = document.querySelector(".produtos")
let inputsFiltros = document.querySelectorAll("input[name=category]")
let total = document.querySelector("#price")
let form = document.querySelector("form")
let descontobtn = document.querySelector("#desconto")

descontobtn.addEventListener("click", aplicarDesconto)

inputsFiltros.forEach(input => input.addEventListener('input', filtrarPorCategoria))
//rodamos um loop para captar cada input do array e adicionar um evento para eles

let produtos = [
{name: "Feijão", category: "nao_perecivel", price: 7.99},
{name: "Arroz", category: "nao_perecivel", price: 5.49},
{name: "Cuscuz", category: "nao_perecivel", price: 2},
{name: "Maçã", category: "perecivel", price: 0.90},
{name: "Peito de Frango", category: "perecivel", price: 18},
] 

function mostrarProdutos(array) {
/* função para criar um container de produto para cada produto dentro do array.
preciso receber como parâmetro o array para usar de base na criação do container de cada
produto, pois esta função pode ser chamada para o array com todos os produtos e também para o array com 
os produtos filtrados */

/* o Container precisa ter um input do type checkbox para que seja possivel selecionar os 
produtos para calcular os valores dos mesmos. O input precisa ter um value com o preço do produto
e um evento de input que será chamado a cada vez que a pessoa marcar ou desmarcar o checkbox */

containerProdutos.innerHTML = ""
/* Limpe o container de produtos sempre que a função for chamada, senão ele irá somar
com produtos ja existentes la */


array.forEach(produto => {
    containerProdutos.innerHTML += `
    <div class="produto">
        <input type="checkbox" value=${produto.price} name="product" oninput="somaTotal()"/>
        <label>Nome: ${produto.name}, Preço: R$ ${produto.price.toFixed(2)}</label>
    </div>
    `
})
}

function somaTotal() {
let produtosSelecionados = document.querySelectorAll("input[name=product]:checked") 
//captando apenas os inputs com o name products que tenham sido checkados para poder fazer 
//a soma dos valores dele

/* Neste caso abaixo, não podemos utilizar um reduce em cima de um array criado pelo querySelectorAll.
Então criamos um array novo com os mesmos elementos do array antigo. Para isso, utilizamos um spread
operator (...) ao lado do nome do array, para retirar todos os elementos do array antigo. Então podemos 
jogar estes elementos no array novo, me permitindo utilizar o reduce novamente */


/* O reduce recebe como primeiro parâmetro uma função callback e como segundo parametro o valor inicial
para o callback começar a reduzir o array. A função callback recebe como parametro o valor acumulado e 
o valor atual (neste caso o valor atual é o input inteiro). Então é necessário somar no acumulador os valores dos
inputs. Eles sempre vem em formato de string, então converta para number */
let somaPrecos = [...produtosSelecionados].reduce((acc, input) => acc + Number(input.value), 0)

total.innerHTML = somaPrecos.toFixed(2)
}

function filtrarPorCategoria() {
/* Para ficar mais facil saber quais valores de filtros fram marcados, eu capto os valores de cada input
que tenha sido marcado e salvo em um array de filtros. Esta função será chamada toda vez que algum dos inputs
de filtros tenham sido marcados ou desmarcados. */
let filtros = []
let produtosfiltrados = []

let inputsFiltrados = document.querySelectorAll("input[name=category]:checked")
inputsFiltrados.forEach(input => filtros.push(input.value))


/* Seria muito dificil e gambiarristico fazer com que minha função filter recebesse dois tipos de filtro diferentes.
    Então criarei arrays filtrados diferentes para cada tipo de filtro. Se por acaso dentro do arrai filtros, existir
    um filtro "perecivel", por exemplo, criarei um array filtrado com apenas os alimentos pereciveis. Como são dois filtros, criarei
    dois arrays filtrados. Porém preciso pensar em uma possibilidade, que é a de mais de um filtro estar selecionado, então mais de um array filtrado precisa aparecer ao mesm tempo no container para o usuario. Digamos que eu tenha quatro filtros, perecivel, não perecivel, de valores maiores de 10 reais e menores de 10 reais. Se o usuario clica em dois destes quatro filtros, dois arrays filtrados devem ser criados e mostrados ao mesmo tempo. Para ficar mais facil para mostrar ao usuario, eu diluo os dois arrays em um array só e crio o container neste array novo. E para diluir um array em outro, basta apenas utilizar o spread operator outra vez */

    /* Se eu não utilizo o spread operator, ele faria isto => [["Maçã", "Banana"], ["Feijão", "Arroz"]]
    e eu quero isto => ["Maçã", "Banana", "Feijão", "Arroz"] */
if(filtros.includes("perecivel")) { 
    //includes retorna true caso  valor exista dentro do array e false se não existir
    let pereciveis = produtos.filter(produto => produto.category === "perecivel")

    produtosfiltrados.push(...pereciveis)
}

if(filtros.includes("nao_perecivel")) {
    let nao_pereciveis = produtos.filter(produto => produto.category === "nao_perecivel")

    produtosfiltrados.push(...nao_pereciveis)
}

mostrarProdutos(produtosfiltrados.length === 0 ? produtos : produtosfiltrados) 
/* Se o array de produtosFiltrados tiver um tamanho 0 ao final, significa que não há inputs de filtro checados, o
que significa que não aconteceu o filtro. O que pode acontecer se todos os inputs forem desmarcados. Então eu preciso mostrar novamente ao usuário o array completo de produtos. Senão, significa que sim, há inputs checkados e há filtros aplicados, então eu mando para a função o array de produtos filtrados */
}

mostrarProdutos(produtos) //chamando a função na hora do carregamento da pagina

function aplicarDesconto() {
    let desconto = 20
    let somaTotal = Number(total.innerHTML)

    total.innerHTML = (somaTotal - somaTotal * (desconto / 100)).toFixed(2)

    descontobtn.removeEventListener("click", aplicarDesconto) 
}