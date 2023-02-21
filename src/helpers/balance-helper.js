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

export const newRegister = async ( token, date, amount, income, category, note ) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: `${API}/balance/register`,
            headers: {'x-token': token},
            data: { date, amount, income, category, note },
        })
        return data;
    } catch (error) {
        return error;
    }
}