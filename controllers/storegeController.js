import StoreScheme from '../models/nosql/storageModel.js'
import { handleHttpError } from '../utils/handleError.js'
import { matchedData } from 'express-validator'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

export const getItems = async(req,res) =>{
    try{
    const data = await StoreScheme.find({})
    res.send({data})
    } catch(error){
    handleHttpError(res, "ERROR_LIST_ITEMS")
    }
}

export const getItem = async(req,res) =>{
    try{
    const {id} = matchedData(req)
    const data = await StoreScheme.findById(id)
    res.send({data})
} catch(error){
    handleHttpError(res, "ERROR_DETAIL_ITEM")
}
}

export const createItem = async(req,res) =>{
    try{
    const { body, file } = req
    const fileData = {
        filename: file.fileData,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await StoreScheme.create(fileData)
    res.send({data})
    } catch(error){
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
}


export const deleteItem = async(req,res) =>{
    
    try{
         const { id } = req.params
        const dataFile = await StoreScheme.findById(id);
        const deleteResponse = await StoreScheme.deleteOne({ _id: id });
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`

        const data = {
            filePath,
            deleted: deleteResponse.matchedCount,
          };

        res.send({data})
    }catch(error){
        handleHttpError(res,'ERROR_DELETE_ITEM')
        console.log(error)
    }
}