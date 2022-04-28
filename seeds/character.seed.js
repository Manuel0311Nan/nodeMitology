import mongoose from "mongoose";

import { Character } from "../models/Character.js";

const characterList = [{
        name: "Odín",
        quality: ["Sabiduria"],
        weapon: ["Gungnir"],
        alias: "Dios de Dioses",
    },
    {
        name: "Thor",
        quality: ["Fuerza", "Valentía"],
        weapon: ["Mjölnir"],
        alias: "Dios del Trueno",
    },
    {
        name: "Frigg",
        quality: ["Vidente"],
        weapon: null,
        alias: "Diosa del Amor",
    },
    {
        name: "Valquiria",
        quality: ["Deidad femenina"],
        weapon: null,
        alias: "La que elige a los caidos en la batalla",
    },
    {
        name: "Balder",
        quality: ["Justicia", "Belleza", "Fuerza"],
        weapon: null,
        alias: "Dios de la Verdad",
    },
    {
        name: "Heimdall",
        quality: ["Visión", "Oído"],
        weapon: ["Gjallarhorn"],
        alias: "Vigilante del Bifröst",
    },
    {
        name: "Loki",
        quality: ["Engaño"],
        weapon: null,
        alias: "Dios de las artimañas",
    },
    {
        name: "Jörmundgander",
        quality: ["Gigante", "Veneno"],
        weapon: null,
        alias: "Serpiente de Midgard",
    },
    {
        name: "Zeus",
        quality: ["Justicia", "Omnipresencia"],
        weapon: ["Rayo"],
        alias: "Rey de los dioses y diosas",
    },
    {
        name: "Minotauro",
        quality: ["Violento", "Mitad Humano-Mitad Toro"],
        weapon: null,
        alias: "Minotauro",
    },
    {
        name: "Heracles",
        quality: ["Valiente", "Audaz"],
        weapon: ["Espada", "Arco"],
        alias: "Héroe más grande de Grecia",
    },
    {
        name: "Atenea",
        quality: ["Fuerza", "Velocidad"],
        weapon: ["Égida", ],
        alias: "Diosa de la Sabiduría",
    },
    {
        name: "Ares",
        quality: ["Violento"],
        weapon: ["Antorcha encendida"],
        alias: "Dios de la Guerra",
    },
    {
        name: "Ra",
        quality: ["Cuerpo de hombre con cabeza de halcón"],
        weapon: ["Cetro Uas"],
        alias: "Dios del Sol",
    },
    {
        name: "Osiris",
        quality: ["Primera momia"],
        weapon: ["Atef"],
        alias: "Dios de la resurreción",
    },
    {
        name: "Nefertiti",
        quality: ["Belleza"],
        weapon: null,
        alias: "La mujer bella ha llegado",
    },
    {
        name: "Amenofis IV",
        quality: ["Faraón "],
        weapon: null,
        alias: "Servidor de Atón",
    },
];
const characterDocuments = characterList.map(
    (element) => new Character(element)
);
mongoose
    .connect(
        "mongodb+srv://Nu2305:HMnkim7BALgJvm4@cluster0.adkjp.mongodb.net/charactersretryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(async() => {
        const allCharacters = await Character.find();
        if (allCharacters.length) {
            await Character.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data ${err}`))
    .then(async() => {
        await Character.insertMany(characterList);
        console.log("DatabaseCreated");
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect);