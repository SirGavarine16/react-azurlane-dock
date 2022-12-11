import { azurApi } from "../api"
import { ShipgirlResponse, ShipgirlsResponse } from "../constants";

export const getAllShipgirls = async () => {
    const { data } = await azurApi.get<ShipgirlsResponse>('/shipgirls');
    return data;
}

export const getShipgirl = async (name: string) => {
    const { data } = await azurApi.get<ShipgirlResponse>(`/shipgirls/${name}`);
    return data;
}