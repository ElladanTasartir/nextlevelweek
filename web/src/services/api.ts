import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});
//Com o axios podemos passar um objeto de configuração

export default api;