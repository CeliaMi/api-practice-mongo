import express  from "express";
import cors from 'cors'

const app = express();
app.use(cors())

const PORT = 3000
 
app.listen(PORT, ()=> {
    console.log(`tu app esta lista por http://localhost:${PORT}`)
})