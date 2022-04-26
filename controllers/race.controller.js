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
const getRaceById = async(req, res, next) => {
    try {
        const { raceID } = req.params;
        const raceByID = await Race.findById(raceID);

        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { race: raceByID },
        });
    } catch (error) {
        return next(error);
    }
};
const findRaceByName = async(req, res, next) => {
    const { name } = req.params;
    console.log(name);
    try {
        const raceByName = await Race.find({ name: name });
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { race: raceByName }
        })
    } catch (error) {
        next(error)
    }
}
const editRace = async(req, res, next) => {
    try {
        const { raceID } = req.params;
        console.log(raceID);
        const raceModify = new Race(req.body);
        raceModify._id = raceID;
        const raceUpdated = await Race.findByIdAndUpdate(
            raceID,
            raceModify
        );
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { race: raceUpdated },
        });
    } catch (error) {
        return next(error);
    }
};
const deleteRace = async(req, res, next) => {
    try {
        const { raceID } = req.params;
        console.log(raceID);
        const raceDelete = await Race.findByIdAndDelete(raceID);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { race: raceDelete },
        });
    } catch (error) {
        return next(error);
    }
};

export {
    getRaces,
    createRace,
    getRaceById,
    findRaceByName,
    editRace,
    deleteRace
};