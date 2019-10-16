const nombre = document.getElementById('mantri-nombre');
const salud = document.getElementById('mantri-salud');
const fase = document.getElementById('mantri-fase');
const energia = document.getElementById('mantri-energia');
const elementomain = document.getElementById('mantri-elementomain');

const mantriApiUrl = 'https://localhost:5001/mantri/Mantri/';

let getPokemonData = async ()=> {
    const respose = await fetch(`${mantriApiUrl}mantri/3`);
    const pokemon = await respose.json();
    console.log(mantri);
    const {nombre , salud, elementomain} = mantri;
    /*console.log(abilities[0].ability.name);
    abilities.forEach(element => {
        pokemonAbilities.innerHTML = `<li>${element.ability.name}</li>`;
    });*/

    nombre.innerText = nombre;
    fase.innerText = `Numero de Mantri: ${mantri.id}`;
    salud.innerText = `Salud: ${salud}`;
    energia.innerText = `Energia: ${mantri.energia}`;
    
};

getMantriData();