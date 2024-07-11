import axios, { AxiosResponse } from "axios";
import { DeliveryEmployeeRequest } from "../../models/DeliveryEmployeeRequest";

export const createDeliveryEmployee = async (deliveryEmployee: DeliveryEmployeeRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/delivery-employee", deliveryEmployee);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Could not Create Delivery Employee');
    }
}