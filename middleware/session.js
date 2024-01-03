import { handleHttpError } from '../utils/handleError.js'
import { verifyToken } from '../utils/handleJwt.js'
import  UserScheme  from '../models/nosql/userModel.js'

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

        //a través del id que trae el token sacamos la información del usuario y la ponemos a disposición de las request que este usuario pueda hacer

        //además de para saber el rol, hacer esto nos permite tener un control de trazabilidad, es decir, saber que usuario ha hecho cada petición.

        const user =  await  UserScheme.findById(dataToken._id)
        req.user = user
        //si todo da ok que avance al paso siguiente
        next()

    }catch(error){
        handleHttpError(res, "NOT_SESSION", 401)
    }
}