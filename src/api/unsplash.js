import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BBzHpbro5p932MoSNiOO5swT5hX1hBOipLfVXtPuTX4' 
    }
});