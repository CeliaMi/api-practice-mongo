import mongoose from "mongoose";

export const dbConnect = async () =>{

    const DB_URI = process.env.DB_URI;
        try {
          await mongoose.connect( DB_URI );
          console.log("⭐data base connected⭐");
        } catch (error) {
          console.error(error);
          console.log('***ERROR DE CONEXION****')
        }
      };



