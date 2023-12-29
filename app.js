import express  from "express";
import cors from 'cors'
import 'dotenv/config'
import { dbConnect } from "./config/mongo.js";
import { tracksRouter } from "./routes/tracksRoutes.js";

const app = express();
app.use(cors())
app.use(express.json())

dbConnect();

const PORT = process.env.PORT || 8000

app.use("/api/tracks", tracksRouter )
 
app.listen(PORT, ()=> {
    console.log(`tu app esta lista por http://localhost:${PORT}`)
})


