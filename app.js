import express  from "express";
import cors from 'cors'
import 'dotenv/config'
import { dbConnect } from "./config/mongo.js";



const app = express();
app.use(cors())



const PORT = process.env.PORT || 8000
 
app.listen(PORT, ()=> {
    console.log(`tu app esta lista por http://localhost:${PORT}`)
})

dbConnect();
