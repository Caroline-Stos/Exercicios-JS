//Obter elemento do DOM por ID´s

const formCadastro = document.getElementById("form-cadastro");
const tabela = document.getElementById("tabela-estoque");
const btnVerEstoque = document.getElementById("btn-ver-estoque");

//GetElementById obtem os elementos dos ids

let estoque = [];

formCadastro.addEventListener("submit", function(event){

    event.preventDefault(); // Previne o comportamento padrão do form HTML ao ser submetido.

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const dataEntrada = document.getElementById("data-entrada").value;

    //value = obtem o valor da ID;

    const item = { nome, preco, quantidade, dataEntrada};
    // Cria um objeto com todos os elementos que ele precisa;

    estoque.push(item);

    alert(`O item "${nome}" foi adicionado.`);

    //Adiciona o item;
    formCadastro.reset();

});

//Evento do botao ver estoque;

btnVerEstoque.addEventListener("click", function() {
    //Verifica se o estoque está vazio;

    if(estoque.length === 0){
        //o cod abaixo retorna a tabela em branco caso nao haja mais nada em estoque.
        tabela.querySelector("tbody").innerHTML = "";
        alert("Não há produtos no estoque.");
        return;
    };

    //Length retorna o comprimento do elemento.

    tabela.querySelector("tbody").innerHTML = "";
    //Seleciona o campo da tabela;

    estoque.forEach(function (item) {

        const tr  = document.createElement("tr");
        tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.preco}</td>
        <td>${item.quantidade}</td>
        <td>${item.dataEntrada}</td>
        <td><button>Remover do estoque</button></td>
        `;
        //Criou elementos novos (celulas) dentro do HTML com o createElement.

        tr.querySelector("button").addEventListener("click", function() {
            //Encontra o botao remover item.
        const index = estoque.indexOf(item);
        //Encontra o item/objeto;
        estoque.splice(index, 1);
        //Remove o conteudo do item;
        
        tabela.removeChild(tr);//Remove a linha do item;

        });
        //O querySelector() método retorna o primeiro elemento que corresponde a um seletor CSS.
        tabela.querySelector("tbody").appendChild(tr);
        //Adiciona uma linha a tabela;
    });

    tabela.style.display = "table";
    //Mostra a tabela;
});