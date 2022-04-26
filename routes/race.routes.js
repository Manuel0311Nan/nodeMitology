import express from "express";


import {
    getRaces,
    createRace,
    getRaceById
} from '../controllers/race.controller.js';

import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';


const racesRoutes = express.Router();

racesRoutes.get("/", getRaces);
racesRoutes.post("/", [upload.single('picture'), uploadToCloudinary], createRace);
racesRoutes.get("/:raceID", getRaceById);
racesRoutes.get("/name/:name", findRaceByName);
racesRoutes.put("/modify/:raceID", editRace);
racesRoutes.delete("/delete/:raceID", deleteRace);

export { racesRoutes };