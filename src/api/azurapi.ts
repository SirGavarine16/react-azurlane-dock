import axios from "axios";

const azurApi = axios.create({
    // baseURL: 'https://azurlane-dock-api.onrender.com/api',
    baseURL: 'http://localhost:3026/api',
});

export default azurApi;