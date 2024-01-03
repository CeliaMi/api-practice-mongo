import express  from "express";
import { createItem, getItems, getItem, updateItem, deleteItem } from "../controllers/trackController.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracksValidator.js";
// import { customHeader } from "../middleware/customHeader.js"; 
import { authMiddleware } from "../middleware/session.js";
import { checkRol } from "../middleware/rolMiddleware.js";

export const tracksRouter = express.Router();

// es importante poner *checkRol()* después del authMiddleware porque primero necesita que llegen los datos para después chequearlos

tracksRouter.get('/', authMiddleware, checkRol(["user"]), getItems)
tracksRouter.get('/:id',authMiddleware, validatorGetItem, getItem)
tracksRouter.post('/', authMiddleware, checkRol(["user"]), validatorCreateItem, createItem)
tracksRouter.put('/:id',authMiddleware, validatorGetItem, validatorCreateItem, updateItem)
tracksRouter.delete('/:id',authMiddleware, validatorGetItem, deleteItem)