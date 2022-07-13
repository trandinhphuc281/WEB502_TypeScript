import { instance } from "./instance";

export function getAll(){
    return instance.get('/pokemons')
};

export function get(id:number){
    return instance.get(`/pokemons/${id}`)
}