//espera a que el contenido del documento este completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  
  //obtiene la referencia al campo de busqueda por id
  const searchInput = document.getElementById("search");

  //agrega un evento cuando se presiona una tecla dentro del campo de busqueda
  searchInput.addEventListener("keypress", (e) => {
    //si la tecla presionada es enter
    if (e.key === "Enter") {
      //llama a la funcion fetchPokemon con el valor del input en minusculas
      fetchPokemon(searchInput.value.toLowerCase());
    }
  });

  //funcion asincrona que busca un pokemon por nombre o id
  async function fetchPokemon(nameOrId) {
    try {
      //hace la solicitud a la pokeapi con el nombre o id del pokemon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
      //convierte la respuesta en formato json
      const data = await response.json();
      //llama a la funcion para mostrar el pokemon
      displayPokemon(data);
    } catch (err) {
      //muestra una alerta si el pokemon no se encuentra
      alert("Pokémon no encontrado");
    }
  }

  //funcion que muestra la informacion del pokemon en el html
  function displayPokemon(pokemon) {
    //obtiene el div donde se mostrara la imagen del pokemon
    const pokemonImageDiv = document.getElementById("pokemon-image");

    //inserta la imagen del pokemon en el div
    pokemonImageDiv.innerHTML = `
      <img id="pokemon-img" src="${pokemon.sprites.front_default}" alt="${pokemon.name}" style="cursor:pointer;" />
    `;

    //muestra el nombre y datos de los pokemones
    document.getElementById("pokemon-name").textContent = pokemon.name.toUpperCase();
    document.getElementById("pokemon-id").textContent = pokemon.id;
    document.getElementById("pokemon-type").textContent = pokemon.types.map(t => t.type.name).join(", ");
    document.getElementById("pokemon-weight").textContent = pokemon.weight + " kg";
    document.getElementById("pokemon-height").textContent = pokemon.height + " m";
  }

  //pone el boton para buscar un pokemon aleatorio
  const randomBtn = document.getElementById("random-btn");
  //agrega un evento al boton para cuando se hace click
  randomBtn.addEventListener("click", () => {
    //genera un id aleatorio entre 1 y 1025
    const randomId = Math.floor(Math.random() * 1025) + 1;
    //busca el pokemon aleatorio con ese id
    fetchPokemon(randomId);
  });
});