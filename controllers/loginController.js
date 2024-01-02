import { matchedData } from "express-validator";
import { encrypt } from "../utils/handlePassword.js";
import userModel from "../models/nosql/userModel.js";
import { tokenSign } from "../utils/handleJwt.js";


export const loginController =  async(req, res)=>{
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
    console.log(error)
}
} 
