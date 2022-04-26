import { Mitology } from "../models/Mitology.js";
import { httpStatusCode } from "../seeds/httpStatusCode.js";

const getMitology = async(req, res, next) => {
    try {
        const mitologies = await Mitology.find();
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { mitology: mitologies },
        });
    } catch (error) {
        return next(error);
    }
};
const createMitology = async(req, res, next) => {
    try {
        const newMitology = new Mitology();
        newMitology.name = req.body.name;
        newMitology.characteristics = req.body.characteristics;
        characters = []

        const newMitologyDB = await newMitology.save();
        return res.json({
            status: 201,
            message: httpStatusCode[201],
            data: { mitology: newMitologyDB },
        });
    } catch (error) {
        return next(error);
    }
};
const getMitologyById = async(req, res, next) => {
    try {
        const { mitologyID } = req.params;
        const mitologyByID = await Mitology.findById(mitologyID);

        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { mitology: mitologyByID },
        });
    } catch (error) {
        return next(error);
    }
};
const findMitologyByName = async(req, res, next) => {
    const { name } = req.params;
    console.log(name);
    try {
        const mitologyByName = await Mitology.find({ name: name });
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { mitology: mitologyByName }
        })
    } catch (error) {
        next(error)
    }
}
const editMitology = async(req, res, next) => {
    try {
        const { mitologyID } = req.params;
        console.log(mitologyID);
        const mitologyModify = new Mitology(req.body);
        mitologyModify._id = mitologyID;
        const mitologyUpdated = await Mitology.findByIdAndUpdate(
            mitologyID,
            mitologyModify
        );
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { mitology: mitologyUpdated },
        });
    } catch (error) {
        return next(error);
    }
};
const deleteMitology = async(req, res, next) => {
    try {
        const { mitologyID } = req.params;
        console.log(mitologyID);
        const mitologyDelete = await Mitology.findByIdAndDelete(mitologyID);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { mitology: mitologyDelete },
        });
    } catch (error) {
        return next(error);
    }
};

export {
    getMitology,
    createMitology,
    getMitologyById,
    findMitologyByName,
    editMitology,
    deleteMitology
};