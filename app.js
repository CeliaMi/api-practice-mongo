import express  from "express";
import cors from 'cors'
import 'dotenv/config'
import { dbConnect } from "./config/mongo.js";
import { tracksRouter } from "./routes/tracksRoutes.js";
import { storageRoutes } from "./routes/storageRoutes.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

dbConnect();

const PORT = process.env.PORT || 8000

app.use("/api/tracks", tracksRouter )
app.use("/api/storage", storageRoutes )
 
app.listen(PORT, ()=> {
    console.log(`tu app esta lista por http://localhost:${PORT}`)
})


