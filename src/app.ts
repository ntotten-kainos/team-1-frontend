import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getAllDatabases } from "./controllers/TestController";
import { getCreateSalesEmpForm, postSalesEmpForm, getAllSalesEmployees } from "./controllers/SalesController";
import { getSalesEmployeeById } from "./services/SalesEmpService";
import { getDeliveryEmployeeForm, postDeliveryEmployeeForm } from "../controllers/DeliveryEmployeeController";


const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});


app.get('/', getAllDatabases);
app.get('/createSalesEmpForm', getCreateSalesEmpForm);
app.post('/createSalesEmpForm', postSalesEmpForm);
app.get('/salesEmp/:id', getSalesEmployeeById)
app.get('/salesEmployees', getAllSalesEmployees);
app.get('/deliveryEmployeeForm', getDeliveryEmployeeForm);
app.post('/deliveryEmployeeForm', postDeliveryEmployeeForm);
