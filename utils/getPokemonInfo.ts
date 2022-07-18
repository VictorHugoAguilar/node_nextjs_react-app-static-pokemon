import { pokeApi } from "../api";
import { Pokemon } from "../interface";

export const getPokemonInfo = async (identification: string) => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${identification}/`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        return null;
    }
};