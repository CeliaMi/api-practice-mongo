import  { check } from 'express-validator';
import {validationResults} from '../utils/handleValidator.js'

export const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    ( req, res, next ) => { return validationResults(req, res, next) }
];


