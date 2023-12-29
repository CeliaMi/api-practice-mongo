import express  from "express";
import { getItems } from "../controllers/trackController.js";

export const tracksRouter = express.Router();


tracksRouter.get('/', getItems)
tracksRouter.post('/')
tracksRouter.put('/')
tracksRouter.get('/')