import mongoose from "mongoose";

//Recuperamos Schema de mongoose
const Schema = mongoose.Schema;

//Creamos el esquema de personajes
const characterSchema = new Schema({
    name: { type: String, required: true },
    quality: { type: Array },
    weapon: { type: String },
    alias: { type: String },
    image: { type: String, required: true }
}, {
    timestamps: true,
});

//Creamos y exportamos el modelo Character
const Character = mongoose.model('Character', characterSchema);

export { Character }