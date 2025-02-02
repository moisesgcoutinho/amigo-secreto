//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = []; // Lista para armazenar os nomes

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");

    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (amigos.includes(nome.toLowerCase())) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome.toLowerCase());

    // Criar um item da lista
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para o sorteio!");
        return;
    }

    let sorteio = [...amigos]; // Copia a lista original
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let amigoSorteado;
        
        do {
            amigoSorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (amigoSorteado === amigos[i]); // Evita que a pessoa tire a si mesma

        resultado.push({ amigo: amigos[i], sorteado: amigoSorteado });

        // Remove o sorteado da lista para não ser escolhido novamente
        sorteio = sorteio.filter(nome => nome !== amigoSorteado);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa o resultado anterior

    resultado.forEach(par => {
        const item = document.createElement("li");
        item.textContent = `${par.amigo} → ${par.sorteado}`;
        listaResultado.appendChild(item);
    });
}
