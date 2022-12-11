import { ShipgirlCardData } from "../constants";

export const getFavoritesInLocalStorage = (): ShipgirlCardData[] => {
    return JSON.parse(localStorage.getItem('favoriteShipgirls') || '[]');
}

export const toggleFavorites = (shipgirlData: ShipgirlCardData) => {
    let favorites = getFavoritesInLocalStorage();
    if (favorites.find((shipgirl) => shipgirl.id === shipgirlData.id)) {
        favorites = favorites.filter((shipgirl) => shipgirl.id !== shipgirlData.id);
    } else {
        favorites.push(shipgirlData);
    }
    localStorage.setItem('favoriteShipgirls', JSON.stringify(favorites));
}

export const existsInFavorites = (id: string) => {
    const favorites = getFavoritesInLocalStorage();
    return Boolean(favorites.find((shipgirl) => shipgirl.id === id));
} 