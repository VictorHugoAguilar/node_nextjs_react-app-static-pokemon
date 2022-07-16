
const toogleFavorite = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    console.log('favorites saved, ', favorites);
    console.log('id new, ', id);

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokemonId => pokemonId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
}

const getFavorites = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}


export default { toogleFavorite, existInFavorites, getFavorites };