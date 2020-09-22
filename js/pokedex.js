// var api = fetch(url).then(function(data) {
//             const pokemon = res.json();
//             console.log(pokemon);
//             }).catch(function(error) {

//             });

// console.log(api);

const fetchPokemon = () => {
        console.log('fetching pokemon');
        for(let i = 1; i < 150; i++) {       
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data); // all info here
                
                const pokemon = {
                    name: data.name,
                    id: data.id,
                    // image: data.image['front_default'],
                    type: data.types.map((type) => type.type.name).join(', ')
                };
                console.log(pokemon);
            });
        }
};

fetchPokemon();
let a = 2;
let b = 4;

console.log(`added together is ${a + b}`);


// Selector

const pokeInput = document.querySelector('.poke-input')
