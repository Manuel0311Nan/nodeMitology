import mongoose from "mongoose";

import { Character } from "../models/Character.js";

const characterList = [{
        name: "Odín",
        quality: ["Sabiduria"],
        weapon: ["Gungnir"],
        alias: "Dios de Dioses",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1650798723/Characters/Odin_xjy2ti.jpg"
    },
    {
        name: "Thor",
        quality: ["Fuerza", "Valentía"],
        weapon: ["Mjölnir"],
        alias: "Dios del Trueno",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651081756/Characters/thor_xvkn2h.jpg"
    },
    {
        name: "Frigg",
        quality: ["Vidente"],
        weapon: null,
        alias: "Diosa del Amor",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651081848/Characters/frigg_owjorl.jpg"
    },
    {
        name: "Valquiria",
        quality: ["Deidad femenina"],
        weapon: null,
        alias: "La que elige a los caidos en la batalla",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651333380/Characters/valquiria_iprita.jpg"
    },
    {
        name: "Balder",
        quality: ["Justicia", "Belleza", "Fuerza"],
        weapon: null,
        alias: "Dios de la Verdad",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651081908/Characters/baldur_vgpc2v.jpg"
    },
    {
        name: "Heimdall",
        quality: ["Visión", "Oído"],
        weapon: ["Gjallarhorn"],
        alias: "Vigilante del Bifröst",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651081757/Characters/heimdall_pdoq2h.jpg"
    },
    {
        name: "Loki",
        quality: ["Engaño"],
        weapon: null,
        alias: "Dios de las artimañas",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651082026/Characters/loki_aqwl9g.jpg"
    },
    {
        name: "Jörmundgander",
        quality: ["Gigante", "Veneno"],
        weapon: null,
        alias: "Serpiente de Midgard",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651082226/Characters/jormungand_kbljke.jpg"
    },
    {
        name: "Zeus",
        quality: ["Justicia", "Omnipresencia"],
        weapon: ["Rayo"],
        alias: "Rey de los dioses y diosas",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651082291/Characters/zeus_flpjqf.jpg"
    },
    {
        name: "Minotauro",
        quality: ["Violento", "Mitad Humano-Mitad Toro"],
        weapon: null,
        alias: "Minotauro",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651082320/Characters/minotauro_iqrawn.jpg"
    },
    {
        name: "Heracles",
        quality: ["Valiente", "Audaz"],
        weapon: ["Espada", "Arco"],
        alias: "Héroe más grande de Grecia",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651082463/Characters/heracles_xwikbp.jpg"
    },
    {
        name: "Atenea",
        quality: ["Fuerza", "Velocidad"],
        weapon: ["Égida", ],
        alias: "Diosa de la Sabiduría",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651333493/Characters/atenea_darvdp.jpg"
    },
    {
        name: "Ares",
        quality: ["Violento"],
        weapon: ["Antorcha encendida"],
        alias: "Dios de la Guerra",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651333494/Characters/Ares_Brann_sm24ke.webp"
    },
    {
        name: "Ra",
        quality: ["Cuerpo de hombre con cabeza de halcón"],
        weapon: ["Cetro Uas"],
        alias: "Dios del Sol",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651333540/Characters/Ra_bg5axp.webp"
    },
    {
        name: "Osiris",
        quality: ["Primera momia"],
        weapon: ["Atef"],
        alias: "Dios de la resurreción",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651333570/Characters/Osiris_ty1ntf.webp"
    },
    {
        name: "Nefertiti",
        quality: ["Belleza"],
        weapon: null,
        alias: "La mujer bella ha llegado",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651333642/Characters/nefertiti_ollhek.jpg"
    },
    {
        name: "Amenofis IV",
        quality: ["Faraón "],
        weapon: null,
        alias: "Servidor de Atón",
        image: "https://res.cloudinary.com/dcpgr4jjn/image/upload/v1651333750/Characters/akenaton_mpt2lu.jpg"
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