import { handleHttpError } from "../utils/handleError.js";

export const checkRol = (reqRol) => (req, res, next) => {
    try{
        const { user } = req;
        console.log({user})
        const rolesByUser = user.role;
        const checkValueRol = reqRol.some((rolSingle) => rolesByUser.includes(rolSingle))

        if(!checkValueRol){
            handleHttpError( res, "USER_NOT_PERMISSIONS")
        }

    }catch(error){
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
    next();

}