import express from "express";
import { UserRole } from '../models/JwtToken';


export const allowRoles = ( allowedRoles: UserRole[] ) => {
    return (request: express.Request, response: express.Response, next: express.NextFunction) => {
        if(!request.session.token) {
            
        }
    }
}