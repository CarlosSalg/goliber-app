import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export const getBalance = async ( token ) => {
    try {
        const { data } = await axios({
            method: 'get',
            url: `${API}/balance/`,
            headers: {'x-token': token},
        })
        return data;
    } catch (error) {
        return error;
    }
}