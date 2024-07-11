import  axios, { AxiosResponse }  from 'axios';
import { LoginRequest } from '../models/LoginRequest';

export const getToken = async (loginRequest: LoginRequest): Promise<string> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/auth/login", loginRequest);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data);
    }    
}

export const registerUser = async (loginRequest: LoginRequest): Promise<void> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/auth/register", loginRequest);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data);
    }
}
