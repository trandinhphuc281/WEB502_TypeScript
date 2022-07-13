import { Pokemons } from "../models/pokemon";
import { getAll } from "../api/pokemon";

const Header = {
    render: async function(){
        const data = await getAll();
        console.log(data)
        const pokemon: Pokemons[]= data.data;
        console.log(pokemon);
        
        return /*html*/`
            <div class="button" >
                <h3>Generate Pokemon</h3>
            </div>
            <div class="pokemon">
                ${pokemon.map(poke=>/*html*/ `
                    <div class="col" style="margin-bottom: 15px;">
                        <a href="/pokemons/${poke.id}" data-navigo>
                            <img src="${poke.image}" alt="">
                            <h4 style="padding-top:0;">${poke.name}</h4>
                            <div class=text>
                                ${poke.type.map(type=>/*html*/`
                                    <span>${type.type.name}</span>
                                `).join('|')} 
                            </div>
                        </a>
                    </div>
                `).join('')}
            </div>
            
        `
    }
}
export default Header;