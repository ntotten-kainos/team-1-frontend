import { SalesEmpRequest } from "../models/SalesEmpRequest";
import { SalesEmpResponse } from "../models/SalesEmpResponse";
import { SalesEmployee } from "../models/SalesEmployee";
import axios, { AxiosResponse } from "axios";



export const createSalesEmployee = async (salesEmployeeRequest: SalesEmpRequest): Promise<Number> => {
    try {
        console.log(salesEmployeeRequest);
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/sales-employee", salesEmployeeRequest);
        console.log(response.data);
        return response.data;
    }catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }

}

export const getSalesEmployees = async (): Promise<SalesEmpResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/salesEmployees");

        return response.data;
    }catch (e) {
        console.log(e);
        throw new Error('Failed to get sales employees');
    }
} 

export const getSalesEmployeeById = async (id: String): Promise<SalesEmployee> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/sales-employee/" + id);

        return response.data;
    }catch (e) {
        console.log(e);
        throw new Error("Failed to get sales employee");
    }

}