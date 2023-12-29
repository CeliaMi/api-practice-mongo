import TrackScheme from '../models/nosql/trackModel.js'
import { matchedData } from 'express-validator'
import { handleHttpError } from '../utils/handleError.js'

export const getItems = async(req,res) =>{
    try{
        const data = await TrackScheme.find({})
        res.send({data})
    }catch(error){
        handleHttpError(res,'ERROR_GET_ITEMS')
    }

}

export const getItem = async(req,res) =>{
    try{
    req= matchedData(req)
    const { id } = req
    const data = await TrackScheme.findById(id)
    res.send({data})
}catch(error){
    handleHttpError(res,'ERROR_GET_ITEM')
}
}

export const createItem = async(req,res) =>{
    try{
        const body = matchedData(req)
        const data = await TrackScheme.create(body)
        res.send({data})
    }catch(error){
        handleHttpError(res,'ERROR_CREATED_ITEM');
    }

}

export const updateItem = async(req,res) =>{

}

export const deleteItem = async(req,res) =>{

}