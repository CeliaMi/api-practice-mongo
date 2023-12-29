import mongoose from "mongoose";

export const dbConnect = () =>{

    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
        {
        useNewUrlParser: true,
        useUnifieldTopology: true,
        },
    (err,res) => {
        if(!err){
            console.log('**** CONEXION CORRECTA *****')
        } else {
            console.log('**** ERROR DE CONEXION *****')
        }
    }
    );
}


