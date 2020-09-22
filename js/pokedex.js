

const pokedex = document.getElementById('pokedex');
console.log(pokedex);

const fetchPokemon = () => {
    const promises = [];
        for(let i = 1; i < 808; i++) {       
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
        }

        Promise.all(promises).then(results => {
            const pokemon = results.map( data => ({
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map((type) => type.type.name).join(', ')
            }));
            displayPokemon(pokemon);
        });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokeHTMLString = pokemon.map(pokeman =>`
    <li>
        <div class="card border-0">
            <img src="${pokeman.image}"/>
            <div class="card-body">
                <h4>${pokeman.id}. ${pokeman.name}</h4>
                <p>Type: ${pokeman.type}</p>
            </div>
        </div>
    </li>
    `).join('');
    // const html = `<li>${pokemon}</li>`
    pokedex.innerHTML = pokeHTMLString;
};

fetchPokemon();


// Selector

