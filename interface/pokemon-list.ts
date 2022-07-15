export interface PokemonListResponse {
    count: number;
    next?: number;
    previus?: number;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url: string;
}