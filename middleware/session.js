import { handleHttpError } from '../utils/handleError.js'
import { verifyToken } from '../utils/handleJwt.js'

export const authMiddleware = async(req, res, next) => {
    try{
        //primero, si no hay token que nos avise y nos mande un error
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401);
            return
        } 
        //busca en las cabeceras el token y selecciona solo el string del token
        const token = req.headers.authorization.split(' ').pop();

        //con el handle que hemos creado *verifyToken()* ( que utiliza de la librería jwt) verificamos que es un token
        const dataToken = await verifyToken(token);

        // nuestra firma de token *tokenSign()* necesita un id para funcionar verificamos que esta y si no error.
        if(!dataToken._id){
            handleHttpError(res, "ERROR_ID_TOKEN", 401);
        
        }
        //si todo da ok que avance al paso siguiente
        next()

    }catch(error){
        handleHttpError(res, "NOT_SESSION", 401)
    }
}