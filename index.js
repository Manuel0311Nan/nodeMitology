// Importación de Librerias
import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(
    import.meta.url));

//Importacion de Variables y Funciones
import { DB_URL } from "./utils/db.js"
import { raceRoutes } from "./routes/race.routes.js";
import { userRoutes } from "./routes/user.routes.js";
// import './authentication/passport.js';
import { isAuth } from "./authentication/jwt.js";
//IMPORTAMOS FUNCIÓN CONNECT
import { connection } from "./utils/db.js";

import { characterRoutes } from "./routes/character.routes.js";

//IMPORTAR LAS RUTAS
dotenv.config(); //configuro mi dotenv para acceder a las claves de entorno

const server = express();

connection();

//Creamos el servidor con express

const PORT = process.env.PORT || 4000;
//Middlewares
//El orden de los middlewares es muy importante, NO CAMBIAR
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));
// JWT
server.set("secretKey", "nodeRestApi");

server.use(
    session({
        secret: process.env.SESSION_SECRET, // ¡Este secreto tendremos que cambiarlo en producción!
        resave: false, // Solo guardará la sesión si hay cambios en ella.
        saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
        cookie: {
            maxAge: 3600000 // Milisegundos de duración de nuestra cookie, en este caso será una hora.
        },
        store: MongoStore.create({
            mongoUrl: DB_URL,
        })
    })
);

//Le indicamos al server que utilice logger ( morgan) mientras esté en desarrollo
server.use(logger("dev"));
//Ruta que van a usar los "Routes"
server.use("/character", characterRoutes);
server.use("/users", userRoutes);
server.use("/races", raceRoutes);

// Error Control 404
server.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});
server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Unexpected error");
});

//Escuchamos al servidor en el puerto indicado
server.listen(PORT, () => {
    console.log(`Node server listening on port http://localhost:${PORT}`);
});