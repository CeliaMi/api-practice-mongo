import express  from "express";
import { validatorLogin ,validatorRegister }  from '../validators/authValidator.js'
import { loginController } from "../controllers/loginController.js";


export const authRoutes = express.Router();

authRoutes.post('/register', validatorRegister, loginController )


authRoutes.post('/login', validatorLogin, (req, res)=>{

} )