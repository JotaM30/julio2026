async function buscarPokemon() {
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    const display = document.getElementById('resultado');

    try {
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado!");
        }

        const dados = await resposta.json();

        
        display.innerHTML = `
            <h2>${dados.name.toUpperCase()}</h2>
            <img src="${dados.sprites.front_default}" alt="${dados.name}" style="width: 150px;">
            <p><strong>Tipo:</strong> ${dados.types.map(t => t.type.name).join(' / ')}</p>
        `;

    } catch (erro) {
        display.innerHTML = `<p style="color: red;">${erro.message}</p>`;
    }
}