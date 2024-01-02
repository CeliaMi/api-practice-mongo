import { matchedData } from "express-validator";
import { encrypt, compare } from "../utils/handlePassword.js";
import userModel from "../models/nosql/userModel.js";
import { tokenSign } from "../utils/handleJwt.js";
import { handleHttpError } from "../utils/handleError.js";


export const registerController =  async(req, res)=>{
    try{
    req = matchedData(req)
    const passwordHash = await encrypt(req.password)
    const body = {...req, password: passwordHash}
    const dataUser = await userModel.create(body)
    //esta línea evita que se vea expuesto el hash de la contraseña👇
    dataUser.set('password', undefined, { strict:false})

    const data = {
        token: await tokenSign(dataUser),
        user:dataUser
    }
    res.send({data})
    } catch(error){
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
} 

export const loginController = async(req, res) =>{
    try{
        req = matchedData(req);
        //con select('password') le requerimos la contraseña que en el modelo aparece como false por defecto en las consultas
        const user = await userModel.findOne({email: req.email}).select('password name role email');
        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)

        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401)
        }
        user.set('password', undefined, {strict:false})

        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data})

    }catch(error){
        console.log(error)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }

}
