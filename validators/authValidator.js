import  { check } from 'express-validator';
import {validationResults} from '../utils/handleValidator.js'

export const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({ min:3, max:99}),
    check("age")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({ min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    ( req, res, next ) => { return validationResults(req, res, next) }
];

export const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({ min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    ( req, res, next ) => { return validationResults(req, res, next) }
];


