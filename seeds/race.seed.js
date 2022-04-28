import mongoose from 'mongoose';

import { Race } from '../models/Race.js';

const raceList = [{
        name: "Dios",
        description: "Un dios es una entidad imaginaria cuya presencia o ausencia no puede ser probada de ninguna forma, y que desde tiempos inmemoriales ha acompañado al ser humano en sus diversas manifestaciones.",
        character: [{ type: mongoose.Types.ObjectId, ref: 'Character' }],
    },
    {
        name: "Ser mitológico",
        description: "Denominación que se da a distintos seres presentes en la mitología de distintas civilizaciones o en leyendas más o menos tradicionales del folclore o la cultura popular; con independencia de su carácter sobrenatural o no, o de la creencia en la realidad de su existencia, que solía ser común, incluso entre las personas instruidas, en la época anterior a la Ilustración. ",
        character: [{ type: mongoose.Types.ObjectId, ref: 'Character' }]
    },
    {
        name: "Héroe",
        description: "personaje eminente que encarna la quintaesencia de los rasgos claves valorados en su cultura de origen.",
        character: [{ type: mongoose.Types.ObjectId, ref: 'Character' }]
    },
    {
        name: "Personaje histórico",
        description: "Persona del pasado que ha marcado la historia y que, por lo tanto, ha trascendido en el tiempo. Esta definición incluye tanto a las figuras que han aportado grandes beneficios a la humanidad como a aquellos que han causado grandes perjuicios.",
        character: [{ type: mongoose.Types.ObjectId, ref: 'Character' }]
    },
];

mongoose
    .connect(
        "mongodb+srv://Nu2305:HMnkim7BALgJvm4@cluster0.adkjp.mongodb.net/charactersretryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(async() => {
        const allRaces = await Race.find();
        if (allRaces.length) {
            await Race.collection.drop()
        }
    })
    .catch((err) => console.log(`Error deleting data ${err}`))
    .then(async() => {
        await Race.insertMany(raceList)
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect)