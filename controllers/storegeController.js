import express from 'express'
import StoreScheme from '../models/nosql/storageModel.js'

const PUBLIC_URL = process.env.PUBLIC_URL

export const getItems = async(req,res) =>{
    const data = await StoreScheme.find({})
    res.send({data})
}

export const getItem = async(req,res) =>{
    const data = await StoreScheme.find({})
    res.send({data})
}

export const createItem = async(req,res) =>{
    const { body, file } = req
    const fileData = {
        filename: file.fileData,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await StoreScheme.create(fileData)
    res.send({data})
    }