import express from 'express'
import { uploadMiddleware } from '../utils/handleStorage.js';
import { getItems, createItem, getItem, deleteItem } from '../controllers/storegeController.js';
import { validatorGetItem } from '../validators/storageValidator.js'


export const storageRoutes = express.Router();

storageRoutes.get('/', getItems)
storageRoutes.get('/:id',validatorGetItem, getItem)
storageRoutes.post("/", uploadMiddleware.single("myfile"), createItem)
storageRoutes.delete('/:id', deleteItem);


