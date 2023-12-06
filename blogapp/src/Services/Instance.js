import axios from "axios";

const instance = axios.create({
    baseURL : ('https://jsonplaceholder.typicode.com/'),
    // headers.common['AUTHORIZATION'] : 'AUTH_TOKEN',
});

instance.defaults.headers.common['AUTHORIZATION'] = 'AUTH_TOKEN_INSTANCE';
export default instance;