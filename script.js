let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("name");
    const elementoListaAmigos = document.querySelector(".amigo-lista");
    const nomeAmigo = inputAmigo.value.trim();

    // Validações
    if (nomeAmigo === "") {
        alert("O nome do amigo não pode estar vazio.");
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    // Adiciona o amigo à lista
    listaAmigos.push(nomeAmigo);

    // Cria um novo elemento para exibir o amigo
    const novoAmigo = document.createElement("p");
    novoAmigo.textContent = nomeAmigo;
    elementoListaAmigos.appendChild(novoAmigo);

    // Limpa o campo de input
    inputAmigo.value = "";
}

// Função para sortear os amigos
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos antes de fazer o sorteio.");
        return;
    }

    // Embaralha a lista de amigos
    listaAmigos.sort(() => Math.random() - 0.5);

    const resultadoLista = document.querySelector(".resultado-lista");
    resultadoLista.innerHTML = "";

    // Exibe os pares sorteados
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigoAtual = listaAmigos[i];
        const amigoSorteado = listaAmigos[(i + 1) % listaAmigos.length];
        const parSorteado = document.createElement("p");
        parSorteado.textContent = `${amigoAtual} ➔ ${amigoSorteado}`;
        resultadoLista.appendChild(parSorteado);
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    listaAmigos = [];
    document.querySelector(".amigo-lista").innerHTML = "";
    document.querySelector(".resultado-lista").innerHTML = "";
}

// Event Listeners
document.querySelector(".btn-primeiro").addEventListener("click", function (event) {
    event.preventDefault();
    adicionarAmigo();
});

document.querySelector(".btn-segundo").addEventListener("click", function (event) {
    event.preventDefault();
    sortearAmigo();
});

document.querySelector(".btn-reiniciar").addEventListener("click", function (event) {
    event.preventDefault();
    reiniciar();
});