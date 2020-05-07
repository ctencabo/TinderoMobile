import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'Content-Type': 'application/json',
        'user-key' : 'cfaa05445714fe7891b111c9a5d39f82',
    }
})