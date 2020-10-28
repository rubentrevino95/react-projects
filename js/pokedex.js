var typeIcons = [
    {
        type: 'bug',
        icon: 'icon/Icon_Bug.webp'
    },
    {
        type: 'dark',
        icon: 'icon/Icon_Dark.webp'
    },
    {
        type: 'dragon',
        icon: 'icon/Icon_Dragon.webp'
    },
    {
        type: 'electric',
        icon: 'icon/Icon_Electric.webp'
    },
    {
        type: 'fairy',
        icon: 'icon/Icon_Fairy.webp'
    },
    {
        type: 'fighting',
        icon: 'icon/Icon_Fighting.webp'
    },
    {
        type: 'fire',
        icon: 'icon/Icon_Fire.webp'
    },
    {
        type: 'flying',
        icon: 'icon/Icon_Flying.webp'
    },
    {
        type: 'ghost',
        icon: 'icon/Icon_Ghost.webp'
    },
    {
        type: 'grass',
        icon: 'icon/Icon_Grass.webp'
    },
    {
        type: 'ground',
        icon: 'icon/Icon_Ground.webp'
    },
    {
        type: 'ice',
        icon: 'icon/Icon_Ice.webp'
    },
    {
        type: 'normal',
        icon: 'icon/Icon_Normal.webp'
    },
    {
        type: 'poison',
        icon: 'icon/Icon_Poison.webp'
    },
    {
        type: 'psychic',
        icon: 'icon/Icon_Psychic.webp'
    },
    {
        type: 'rock',
        icon: 'icon/Icon_Rock.webp'
    },
    {
        type: 'steel',
        icon: 'icon/Icon_Steel.webp'
    },
    {
        type: 'water',
        icon: 'icon/Icon_Water.webp'
    },
];

// selecting list
const pokedex = document.getElementById('pokedex');
// console.log(pokedex);

// const fetchPokemon = () => {
//     for(let i = 1; i < 151; i++) {
//         const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         fetch(url)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//             const pokemon = {
//                 name: data.name,
//                 id: data.id,
//                 image: data.sprites['front_default'],
//                 type: data.types.map((type) => type.type.name)
//                 .join(', ')
//             };
//             console.log(pokemon);
//         });
//     }
// };


// push data to new array
const fetchPokemon = () => {
    const promises = [];
        for(let i = 1; i < 808; i++) {       
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url)
        .then((res) => res.json()));
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

fetchPokemon();

// icon type function
function types(typeIcons, pokemon) {
    for(let i = 0; i < typeIcons.length; i++) {
        if(typeIcons.type[i] === pokemon) {
            return typeIcons[i].icon; 
        }
    }
}


const displayPokemon = (pokemon) => {
    // console.log(pokemon);

    var type = pokemon.type;
    const pokeHTMLString = pokemon.map(pokeman =>`
    <li>
        <div class="card border-0">
            <p>${pokeman.id}</p>
            <img class="card-image" src="${pokeman.image}"/>
            <div class="card-body">
                <h5>${pokeman.name}</h5>
                <p>Type: ${pokeman.type}</p>
            </div>
        </div>
    </li>
    `).join('');

    pokedex.innerHTML = pokeHTMLString;
};




// Selector

