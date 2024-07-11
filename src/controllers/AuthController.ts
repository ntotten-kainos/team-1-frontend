import express from "express";
import { getToken, registerUser } from "../services/AuthService";

export const getLoginForm = async (req:express.Request, res:express.Response): Promise<void> => {
    res.render('loginForm.html');
}

export const postLoginForm = async (req:express.Request, res:express.Response): Promise<void> => {
    try {
        req.session.token = await getToken(req.body);
        res.redirect('/orders');
    } catch (error) {
        res.locals.errormessage = error.message;
        res.render('loginForm.html', req.body);
    }
}

export const getRegistrationForm = async (req:express.Request, res:express.Response): Promise<void> => {
    res.render('registerForm.html');
}

export const postRegistrationForm = async (req:express.Request, res:express.Response): Promise<void> => {
    try {
        await registerUser(req.body);
        res.redirect('/loginForm');
    } catch (error) {
        res.locals.errormessage = error.message;
        res.render('registerForm.html', req.body);
    }
}