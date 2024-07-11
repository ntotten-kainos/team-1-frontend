import express from "express";
import { getSalesEmployeeById, getSalesEmployees } from "../services/SalesEmpService"
import { createSalesEmployee } from "../services/SalesEmpService";

export const getAllSalesEmp = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmpList.html', {sales: await getSalesEmployees() });
}

export const getSalesEmployee = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmp.html', { sales: await getSalesEmployeeById(req.params.id) });
}

export const getCreateSalesEmpForm = async (req: express.Request, res: express.Response): Promise<void> => {
    console.log()
    res.render('createSalesEmpForm.html') ;
}

export const postSalesEmpForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        console.log(req.body)
        const id = await createSalesEmployee(req.body);
        res.redirect('/salesEmp/' + id);
    }catch (e) {
        res.locals.errormessage = e.message;
        res.render('createSalesEmpForm.html', req.body);
    }

}

