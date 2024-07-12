import axios, { AxiosResponse } from "axios";
import { DeliveryEmployeeResponse } from "../models/DeliveryEmployeeResponse"
import { DeliveryEmployeeRequest } from "../../models/DeliveryEmployeeRequest";

export const getDeliveryEmployees = async (): Promise<DeliveryEmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/delivery-employee");
        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error('Failed to get Delivery Employees');

export const createDeliveryEmployee = async (deliveryEmployee: DeliveryEmployeeRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/delivery-employee", deliveryEmployee);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Could not Create Delivery Employee');
    }
}