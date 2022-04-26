import { Race } from "../models/Race.js";
import { httpStatusCode } from "../seeds/httpStatusCode.js";

const getRaces = async(req, res, next) => {
    try {
        const races = await Race.find();
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { race: races },
        });
    } catch (error) {
        return next(error);
    }
};
const createRace = async(req, res, next) => {
    try {
        const newRace = new Character();
        newRace.name = req.body.name;
        newRace.characteristics = req.body.characteristics;
        characters = []

        const newRacesDB = await newRace.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: { race: newRacesDB },
        });
    } catch (error) {
        return next(error);
    }
};

export {
    getRaces,
    createRace
};