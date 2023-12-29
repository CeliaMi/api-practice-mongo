import { validationResult } from 'express-validator'

export const validationResults = ( req, res, next ) => {
    try{
        validationResult(req).throw();
        return next(); // si no hay errores continua con el siguiente paso: el controlador
    } catch (err){
        res.status(403);
        res.send({errors: err.array()});
    }
}