import express  from "express";
import cors from 'cors'
import 'dotenv/config'



const app = express();
app.use(cors())



const PORT = process.env.PORT || 8000
 
app.listen(PORT, ()=> {
    console.log(`tu app esta lista por http://localhost:${PORT}`)
})

