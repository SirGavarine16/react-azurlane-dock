import { azurApi } from "../api"
import { ShipgirlsResponse } from "../constants";

export const getAllShipgirls = async () => {
    const { data } = await azurApi.get<ShipgirlsResponse>('/shipgirls');
    return data;
}