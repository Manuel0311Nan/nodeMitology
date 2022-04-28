import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Creamos el esquema de razas
const raceSchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    characters: [{ type: mongoose.Types.ObjectId, ref: 'Character' }]

}, {
    timestamps: true,
});

//Creamos y exportamos el modelo GOD
const Race = mongoose.model('Race', raceSchema);

export { Race }