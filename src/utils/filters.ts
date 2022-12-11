import { hullTypes, nationalities, ShipgirlCardData } from "../constants";

export const filterShipgirlsByNationality = (_nationality: string, _shipgirls: ShipgirlCardData[]) => {
    if (_nationality === 'all') return _shipgirls;
    if (_nationality === 'other') return _shipgirls.filter((shipgirl) => !nationalities.includes(shipgirl.nationality));
    return _shipgirls.filter((shipgirl) => shipgirl.nationality === _nationality);
}

export const filterShipgirlsByRarity = (_rarity: string, _shipgirls: ShipgirlCardData[]) => {
    if (_rarity === 'all')
        return _shipgirls;
    if (_rarity === 'Priority' || _rarity === 'Super Rare')
        return _shipgirls.filter((shipgirl) => shipgirl.rarity === 'Priority' || shipgirl.rarity === 'Super Rare');
    if (_rarity === 'Decisive' || _rarity === 'Ultra Rare')
        return _shipgirls.filter((shipgirl) => shipgirl.rarity === 'Decisive' || shipgirl.rarity === 'Ultra Rare');
    return _shipgirls.filter((shipgirl) => shipgirl.rarity === _rarity);
}

export const filterShipgirlsByHullType = (_hullType: string, _shipgirls: ShipgirlCardData[]) => {
    if (_hullType === 'all')
        return _shipgirls;
    if (_hullType === 'Submarine')
        return _shipgirls.filter((shipgirl) => shipgirl.hullType === 'Submarine' || shipgirl.hullType === 'Submarine Carrier');
    if (_hullType === 'other')
        return _shipgirls.filter((shipgirl) => !hullTypes.includes(shipgirl.hullType) && shipgirl.hullType !== 'Submarine Carrier');
    return _shipgirls.filter((shipgirl) => shipgirl.hullType === _hullType);
}