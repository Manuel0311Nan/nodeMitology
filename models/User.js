// Cargamos el módulo de mongoose
import mongoose from "mongoose";
// Cargamos el módulo de bcrypt
import bcrypt from "bcrypt";
// Definimos el factor de costo, el cual controla cuánto tiempo se necesita para calcular un solo hash de BCrypt. Cuanto mayor sea el factor de costo, más rondas de hash se realizan. Cuanto más tiempo sea necesario, más difícil será romper el hash con fuerza bruta.
const saltRounds = 10;
// Definimos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const UserSchema = new Schema({
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
});
// Antes de almacenar la contraseña en la base de datos la encriptamos con Bcrypt
UserSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
// Exportamos el modelo para usarlo en otros ficheros
const User = mongoose.model("users", UserSchema);

export { User };