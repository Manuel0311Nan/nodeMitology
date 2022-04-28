import express from "express";
import { upload, uploadToCloudinary } from "../middlewares/file.middleware.js";

import {
    getCharacters,
    createCharacter,
    getCharacterByID,
    editCharacter,
    deleteCharacter,
    findCharacterByName,
    addRace,
    addMitology
} from "../controllers/character.controller.js";

//Almacenamos el router de express
const router = express.Router();

router.get("/", getCharacters);
router.get("/characterByName/:name", findCharacterByName)
router.get("/:characterID", getCharacterByID);
router.post("/create", [upload.single('picture'), uploadToCloudinary], createCharacter);
router.put("/modify/:characterID", editCharacter)
router.patch("/modify/:characterID", editCharacter);
router.delete("/delete/:characterID", deleteCharacter);
router.post("/addRace", addRace)
router.post("/addMitology", addMitology)

export { router as characterRoutes };