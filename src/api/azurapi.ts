import axios from "axios";

const azurApi = axios.create({
    baseURL: 'https://azurlane-dock-api.onrender.com/api',
});

export default azurApi;