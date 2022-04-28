import express from "express";


import {
    getMitology,
    createMitology,
    getMitologyById,
    findMitologyByName,
    editMitology,
    deleteMitology
} from '../controllers/mitology.controller.js';

import { upload, uploadToCloudinary } from '../middlewares/file.middleware.js';


const mitologiesRoutes = express.Router();

mitologiesRoutes.get("/", getMitology);
mitologiesRoutes.post("/", [upload.single('picture'), uploadToCloudinary], createMitology);
mitologiesRoutes.get("/:raceID", getMitologyById);
mitologiesRoutes.get("/name/:name", findMitologyByName);
mitologiesRoutes.put("/modify/:raceID", editMitology);
mitologiesRoutes.delete("/delete/:raceID", deleteMitology);

export { mitologiesRoutes };