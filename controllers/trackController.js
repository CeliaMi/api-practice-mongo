import TrackScheme from '../models/nosql/trackModel.js'

export const getItems = async(req,res) =>{
    const data = await TrackScheme.find({})
    res.send({data})
}

export const getItem = (req,res) =>{

}

export const createItem = (req,res) =>{

}

export const updateItem = (req,res) =>{

}

export const deleteItem = (req,res) =>{

}