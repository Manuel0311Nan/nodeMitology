import { Character } from "../models/Character.js";
import { httpStatusCode } from "../seeds/httpStatusCode.js";

const getCharacters = async(req, res, next) => {
    try {
        const characters = await Character.find();
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { character: characters },
        });
    } catch (error) {
        return next(error);
    }
};
//Función para crear personajes
const createCharacter = async(req, res, next) => {
    try {
        const picture = req.file_url || null;
        const newCharacter = new Character();
        newCharacter.name = req.body.name;
        newCharacter.quality = req.body.quality;
        newCharacter.weapon = req.body.weapon;
        newCharacter.alias = req.body.alias;
        newCharacter.image = picture;

        const newCharactersDB = await newCharacter.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: { character: newCharactersDB },
        });
    } catch (error) {
        return next(error);
    }
};
//Función para recuperar un ejercicio por id de Mongo
const getCharacterByID = async(req, res, next) => {
    try {
        const { characterID } = req.params;
        const characterByID = await Character.findById(characterID);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { character: characterByID },
        });
    } catch (error) {
        return next(error);
    }
};
//Función de editar un ejercicio por Id
const editCharacter = async(req, res, next) => {
    try {
        const { characterID } = req.params;
        const characterModify = new Character(req.body);
        //Para evitar que se modifique el id de mongo
        characterModify._id = ejercicioID;
        const characterUpdated = await Character.findByIdAndUpdate(
            characterID,
            characterModify
        );
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { character: characterUpdated },
        });
    } catch (error) {
        return next(error);
    }
};
//Función para eliminar ejercicios de la lista
const deleteCharacter = async(req, res, next) => {
    try {
        const { characterID } = req.params;
        await Character.findByIdAndDelete(characterID);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: `Character eliminado`,
        });
    } catch (error) {
        return next(error);
    }
};
//Función para buscar ejercicio por nombre
const findCharacterByName = async(req, res, next) => {
    const { name } = req.params;
    try {
        const characterByName = await Character.find({ name: name });
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { character: characterByName },
        });
    } catch (error) {
        return next(error);
    }
};
export {
    getCharacters,
    createCharacter,
    getCharacterByID,
    editCharacter,
    deleteCharacter,
    findCharacterByName
};