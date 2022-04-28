import mongoose from 'mongoose';

import { Mitology } from '../models/Mitology.js';

const mitologyList = [{
        name: 'Nórdica',
        influenceArea: ["Suecia", "Noruega", "Dinamarca", "Islandia"],
        description: "La mitología nórdica es el conjunto de mitos provenientes los libros denominados como Eddas donde la mitología nórdica presenta una gran cantidad de deidades , criaturas fabulosas y héroes . ",
    },
    {
        name: 'Griega',
        influenceArea: ["Grecia", "Turquia", "Italia"],
        description: "La mitología griega es el conjunto de mitos y leyendas pertenecientes a la cultura de la Antigua Grecia, que tratan de sus dioses y héroes, la naturaleza del mundo, los orígenes y el significado de sus propios cultos y prácticas rituales. Formaban parte de la religión de la Antigua Grecia, que tenía como objeto de culto básicamente a los dioses olímpicos. ",
    },
    {
        name: 'Egipcia',
        influenceArea: ["Egipto", "Etiopía", "Sudán", "Eritrea"],
        description: "La mitología egipcia comprende el estudio de creencias sustentadas en la religión del Antiguo Egipto desde la época predinástica hasta la imposición del cristianismo, cuando sus prácticas fueron prohibidas en tiempos de Justiniano I, en el año 535.",
    },

];
mongoose.connect(
        "mongodb+srv://Nu2305:HMnkim7BALgJvm4@cluster0.adkjp.mongodb.net/charactersretryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(async() => {
        const allmitologies = await Mitology.find();
        if (allmitologies.length) {
            await Mitology.collection.drop()
        }
    })
    .catch((err) => console.log(`Error deleting data ${err}`))
    .then(async() => {
        await Mitology.insertMany(mitologyList)
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect)