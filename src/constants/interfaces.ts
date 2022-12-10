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

export interface Skin {
    name: string;
    chibi: string;
    image: string;
    cn?: string;
    bg?: string;
    nobg?: string;
    background: string;
    info: {
        enClient?: string;
        cnClient?: string;
        jpClient?: string;
        cost?: string;
        obtainedFrom: string;
        live2dModel: boolean;
    };
}

export interface Skill {
    icon: string;
    names: {
        en: string;
        cn: string;
        jp: string;
    };
    description: string;
    color: string;
}

export interface Artist {
    name: string;
    url: string;
}

export interface ShipgirlPageData {
    id: string;
    names: {
        code: string;
        en: string;
        cn: string;
        jp: string;
        kr: string;
    };
    rarity: 'Normal' | 'Rare' | 'Epic' | 'Super Rare' | 'Ultra Rare' | 'Priority' | 'Decisive';
    hullType: string;
    class: string;
    skills: Skill[];
    misc: {
        artist?: Artist;
        web?: Artist;
        pixiv?: Artist;
        twitter?: Artist;
        voice?: Artist;
    };
    skins: Skin[];
    nationality: string;
    thumbnail: string;
    obtainedFrom: {
        obtainedFrom: string;
        fromMaps: string[];
    };
    construction: {
        constructionTime: string;
        availableIn: {
            light: boolean;
            heavy: boolean;
            aviation: boolean;
            limited: boolean;
            exchange: boolean;
        };
    };
}

export interface ShipgirlResponse {
    message: string;
    shipgirl: ShipgirlPageData;
}