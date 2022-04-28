import mongoose from "mongoose";

//Recuperamos Schema de mongoose
const Schema = mongoose.Schema;

//Creamos el esquema de personajes
const mitologySchema = new Schema({
    name: { type: String, require: true },
    influenceArea: { type: Array, require: true },
    description: { type: String, require: true },
    characters: [{ type: mongoose.Types.ObjectId, ref: 'Character' }]
}, {
    timestamps: true,
});

//Creamos y exportamos el modelo Character
const Mitology = mongoose.model('Mitology', mitologySchema);

export { Mitology }