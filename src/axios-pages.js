import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://homework-64-sc.firebaseio.com/'
});

export default instance;
