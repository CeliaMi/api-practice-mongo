import express  from "express";
import { createItem, getItems, getItem } from "../controllers/trackController.js";
import { validatorCreateItem, validatorGetItem } from "../validators/tracksValdator.js";
import { customHeader } from "../middleware/customHeader.js"; 

export const tracksRouter = express.Router();


tracksRouter.get('/', getItems)
tracksRouter.get('/:id', validatorGetItem, getItem)
tracksRouter.post('/', validatorCreateItem, createItem)
tracksRouter.put('/')
tracksRouter.get('/')