// import express from "express";
// // import { God } from "./models/God"
// import './utils/db.js'
// import cors from "cors";
// import logger from "morgan";
// // import World from "./models/World.js"
// import { godRoutes } from "./routes/god.routes.js";

// //SERVER
// // connection();
// const PORT = 3000;
// const server = express();

// const router = express.Router();

// router.get('/', (req, res) => {
//         res.send('Farewell Gods')
//     })
//     //Cors determina los dominios permitidos que podrán acceder a los archivos alojados en un servidor.
//     // server.use(cors({
//     //     origin: ['http://localhost:3000', 'http://localhost:9999'],
//     //     credentials: true,
//     // }));
//     //logger de morgan, middleware, registra las "requests" . Útil durante la depuración y también si desea crear archivos de registro.
// server.use(logger("dev"));
// server.use('/gods', godRoutes);
// server.listen(PORT, () => {
//     console.log(`Server running in http://localhost:${PORT}`);
// });