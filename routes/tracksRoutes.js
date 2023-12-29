import express  from "express";
import { createItem, getItems, getItem } from "../controllers/trackController.js";

export const tracksRouter = express.Router();


tracksRouter.get('/', getItems)
tracksRouter.get('/:id', getItem)
tracksRouter.post('/', createItem)
tracksRouter.put('/')
tracksRouter.get('/')