import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export const loginAPI = async ( email, password ) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: `${API}/auth/login`,
            data: { email, password }
        })
        return data;
    } catch (error) {
        return error;
    }
}

export const authMe = async ( token ) => {
    try {

        const { data } = await axios({
            method: 'post',
            url: `${API}/auth/auth-me`,
            headers: {'x-token': token},
        })

        return data;
    } catch (error) {
        return error;
    }
}

export const register = async ( email, password, displayName, telephone, rol, photoURL, token ) => {
    try {

        const { data } = await axios({
            method: 'post',
            url: `${API}/auth/register`,
            headers: {'x-token': token},
            data: { email, password, displayName, telephone, rol, photoURL }
        })

        return data;
    } catch (error) {
        return error;
    }
}
