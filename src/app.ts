import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getAllDatabases } from "./controllers/TestController";
import { getAllSalesEmployees } from "./controllers/SalesEmployeeController";
import { getDeliveryEmployeeForm, postDeliveryEmployeeForm } from "./controllers/DeliveryEmployeeController";
import { allowRoles } from "./middleware/AuthMiddleware";
import { UserRole } from "./models/JwtToken";
import { getLoginForm, postLoginForm } from "./controllers/AuthController";

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
app.get('/loginForm', getLoginForm)
app.post('/loginForm', postLoginForm)
app.get('/salesEmployees', allowRoles([UserRole.HR_EMPLOYEE]), getAllSalesEmployees);
app.get('/deliveryEmployeeForm', allowRoles([UserRole.HR_EMPLOYEE]), getDeliveryEmployeeForm);
app.post('/deliveryEmployeeForm', allowRoles([UserRole.HR_EMPLOYEE]), postDeliveryEmployeeForm);

