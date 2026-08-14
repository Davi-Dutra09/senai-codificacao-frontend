const telaLogin = document.querySelector("main");
const telaProdutos = document.querySelector("#tela-produtos");
const telaCarrinho = document.querySelector("#tela-carrinho");

const formulario = document.querySelector("form");

const botaoCarrinho = document.querySelector(".botao-carrinho");
const botaoVoltar = document.querySelector(".voltar-produtos");

const botoesAdicionar = document.querySelectorAll(".produto button");
const listaCarrinho = document.querySelector(".lista-carrinho");


// ===============================
// LOGIN → PRODUTOS
// ===============================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    telaLogin.style.display = "none";

    telaProdutos.style.display = "block";

});


// ===============================
// PRODUTOS → CARRINHO
// ===============================

botaoCarrinho.addEventListener("click", function () {

    telaProdutos.style.display = "none";

    telaCarrinho.style.display = "block";

});


// ===============================
// CARRINHO → PRODUTOS
// ===============================

botaoVoltar.addEventListener("click", function () {

    telaCarrinho.style.display = "none";

    telaProdutos.style.display = "block";

});


// ===============================
// ADICIONAR PRODUTOS AO CARRINHO
// ===============================

botoesAdicionar.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const produto = botao.parentElement;

        const nome = produto.querySelector("h2").textContent;
        const preco = produto.querySelector("p").textContent;
        const imagem = produto.querySelector("img").src;

        const itensCarrinho = listaCarrinho.querySelectorAll(".item-carrinho");

        let produtoEncontrado = null;

        itensCarrinho.forEach(function (item) {

            const nomeItem = item.querySelector("h2").textContent;

            if (nomeItem === nome) {

                produtoEncontrado = item;

            }

        });

        if (produtoEncontrado) {

            const quantidade = produtoEncontrado.querySelector("span");

            quantidade.textContent = Number(quantidade.textContent) + 1;

            return;

        }

        const item = document.createElement("div");

        item.classList.add("item-carrinho");

        item.innerHTML = `
        
            <img src="${imagem}" alt="${nome}">

            <div class="info-carrinho">

                <h2>${nome}</h2>

                <p>${preco}</p>

            </div>

            <div class="quantidade">

                <button type="button">−</button>

                <span>1</span>

                <button type="button">+</button>

            </div>

        `;

        listaCarrinho.appendChild(item);

        const botaoMenos = item.querySelector(".quantidade button:first-child");
        const botaoMais = item.querySelector(".quantidade button:last-child");
        const quantidade = item.querySelector(".quantidade span");

        botaoMais.addEventListener("click", function () {

            quantidade.textContent = Number(quantidade.textContent) + 1;

        });

        botaoMenos.addEventListener("click", function () {

            if (Number(quantidade.textContent) > 1) {

                quantidade.textContent = Number(quantidade.textContent) - 1;

            }

        });

    });

});