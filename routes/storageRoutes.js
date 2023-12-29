import express from 'express'
import { uploadMiddleware } from '../utils/handleStorage.js';
import { getItems, createItem } from '../controllers/storegeController.js';

export const storageRoutes = express.Router();
storageRoutes.post("/", uploadMiddleware.single("myfile"), createItem)
storageRoutes.get('/', getItems)