import express  from "express";
import { createItem, getItems, getItem, updateItem, deleteItem } from "../controllers/trackController.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracksValidator.js";
// import { customHeader } from "../middleware/customHeader.js"; 
import { authMiddleware } from "../middleware/session.js";

export const tracksRouter = express.Router();


tracksRouter.get('/', authMiddleware, getItems)
tracksRouter.get('/:id', validatorGetItem, getItem)
tracksRouter.post('/', validatorCreateItem, createItem)
tracksRouter.put('/:id',validatorGetItem, validatorCreateItem, updateItem)
tracksRouter.delete('/:id',validatorGetItem, deleteItem)