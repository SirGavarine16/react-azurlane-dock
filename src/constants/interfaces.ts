
export interface ShipgirlCardData {
    id: string;
    name: string;
    thumbnail: string;
    rarity: string;
    nationality: string;
    hullType: string;
}

export interface ShipgirlsResponse {
    message: string;
    shipgirls: ShipgirlCardData[];
    total: number;
}