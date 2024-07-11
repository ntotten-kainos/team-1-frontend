import axios, { AxiosResponse } from "axios";
import { DeliveryEmployeeResponse } from "../models/DeliveryEmployeeResponse"

export const getDeliveryEmployees = async (): Promise<DeliveryEmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/delivery-employee");
        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error('Failed to get Delivery Employees');
    
    }
}