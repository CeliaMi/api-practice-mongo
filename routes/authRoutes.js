import express  from "express";
import { validatorLogin ,validatorRegister }  from '../validators/authValidator.js'
import {  registerController, loginController } from "../controllers/authController.js";


export const authRoutes = express.Router();

authRoutes.post('/register', validatorRegister, registerController )


authRoutes.post('/login', validatorLogin, loginController )