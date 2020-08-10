import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID D8BOg2snATRe9ddS2-rzh2RkRCf9AIkxwIRvoUuAbT4'
   }
})