// // dotenv para acceder a las variables del entorno
// import dotenv from "dotenv";
import mongoose from "mongoose";
import "dotenv/config";
//URL local de nuestr base de datos en mongoose y su nombre  Gods
const DB_URL = process.env.DB_URL;

//Función que conecta nuestro servidor a la base de datos de MongoDB mediante mongoose.

const connection = async() => {
    try {
        const DB = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log("Error connecting to database", error)

    };
}
export { connection, DB_URL };