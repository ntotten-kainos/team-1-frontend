import express from "express";
import { JwtToken, UserRole } from '../models/JwtToken'
import { jwtDecode } from 'jwt-decode'; 

export const allowRoles = ( allowedRoles: UserRole[] ) => {
    return (request: express.Request, response: express.Response, next: express.NextFunction) => {
        if(!request.session.token) {
            return response.status(401).send('Not logged in');
        }

        const decodedToken: JwtToken = jwtDecode(request.session.token);
        if (!allowedRoles.includes(decodedToken.Role)) {
            return response.status(403).send('User role not authorised for this action!');
        }
        next();
    }
}