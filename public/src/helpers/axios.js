import axios from 'axios';

export const transport =  axios.create({
    baseURL:'http://localhost:8080'
})