const cardContainer = document.getElementById('pokemon-card');

async function fetchPokemon() {
    try {
        // Consultamos a Gengar, por ejemplo
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/94');
        const data = await response.json();

        cardContainer.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name.toUpperCase()}</h2>
            <p>ID: ${data.id}</p>
            <p>Tipo: ${data.types[0].type.name}</p>
        `;
    } catch (error) {
        cardContainer.innerHTML = `<p>Error al cargar: ${error}</p>`;
    }
}

fetchPokemon();