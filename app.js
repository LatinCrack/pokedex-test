const cardContainer = document.getElementById('pokemon-card');

// Agregamos 'event' como parámetro para poder controlar el formulario
async function buscar(event) {
    // Si la función fue llamada por un formulario, evitamos que la página se recargue
    if (event) {
        event.preventDefault();
    }

    const input = document.getElementById('pokemon-name');
    const nombre = input.value.toLowerCase().trim();

    if (!nombre) return; // Si está vacío, no hace nada

    cardContainer.innerHTML = "<p>Buscando...</p>";

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        
        if (!response.ok) throw new Error("Pokémon no encontrado");

        const data = await response.json();

        cardContainer.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h2>${data.name.toUpperCase()}</h2>
            <p>ID: ${data.id}</p>
            <p>Tipo: ${data.types[0].type.name}</p>
        `;
    } catch (error) {
        cardContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}