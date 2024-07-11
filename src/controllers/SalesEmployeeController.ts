import express from "express";
import { getSalesEmployees } from "../services/SalesEmployeeService";

export const getAllSalesEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmployeeList.html', { salesEmployees: await getSalesEmployees() });
}