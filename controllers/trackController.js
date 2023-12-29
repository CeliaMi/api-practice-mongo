import TrackScheme from '../models/nosql/trackModel.js'

export const getItems = async(req,res) =>{
    const data = await TrackScheme.find({})
    res.send({data})
}

export const getItem = async(req,res) =>{
    const data = await TrackScheme.find({})
    res.send({data})
}

export const createItem = async(req,res) =>{
const { body } = req
const data = await TrackScheme.create(body)
res.send({data})
}

export const updateItem = async(req,res) =>{

}

export const deleteItem = async(req,res) =>{

}