import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID gBBL_LenLxqOP_dg07_C5XZ3X0IOeUKrBQ7dKQYdPpk"
    }
});