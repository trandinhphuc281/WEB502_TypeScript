import { get } from "../api/pokemon";
import { Pokemons } from "../models/pokemon";

const PokemonDetail = {
    render: async function(id){
        const {data} = await get(id);
        console.log(data);
        
        const pokemon: Pokemons[]= id;
        console.log(pokemon);
        return /*html*/`
            <div class="detail" style="margin-top:15%;">
                <div class="col" style="background-color: white;"></div>
                <div class="col" style="background-color: white;"></div>
                <div class="col">
                    <img src="${data.image}" alt="" style="width:100%;">
                </div>
                <div class="col" style="padding: 23% 0;">
                    <span style="display:block;margin-bottom:5px;">Id: ${data.id}</span>
                    <h4 style="margin-bottom:10px;">Name: ${data.name}</h4>
                    <div class="type" style="margin-bottom:10px;">Abilities:
                        ${data.abilities.map(ability=>/*html*/`
                            <span>${ability.ability.name}</span>
                        `).join('|')}
                    </div>
                    <div class="type" style="margin-bottom:10px;">Type:
                        ${data.type.map(type=>/*html*/`
                            <span>${type.type.name}</span>
                        `).join('|')}
                    </div>
                    <div class="long">
                        <span>Width: ${data.weight}</span> -
                        <span>Height: ${data.height}</span>
                    </div>
                </div>
                <div class="col" style="background-color: white;"></div>
                <div class="col" style="background-color: white;"></div>
            </div>
        `
    }
}

export default PokemonDetail;