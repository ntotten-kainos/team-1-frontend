import axios, { AxiosResponse } from "axios";
import { SalesEmployeeResponse } from "../models/SalesEmployeeResponse";

export const getSalesEmployees = async(): Promise<SalesEmployeeResponse []> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/sales-employee");
        
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get sales employees');
    }
}