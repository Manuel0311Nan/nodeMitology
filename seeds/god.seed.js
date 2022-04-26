import mongoose from 'mongoose';

import { Character } from '../models/Character.js';

const characterList = [{
        name: 'Odín',
        weapon: 'Gungnir',
        alias: 'Dios de Dioses',
    },
    {
        name: 'Thor',
        weapon: 'Mjölnir',
        alias: 'Dios del Trueno',
    },
    {
        name: 'Frigg',
        weapon: 'Sabedora de profecías',
        alias: 'Diosa del Amor',
    },
    {
        name: 'Balder',
        weapon: 'Fuerza sobrehumana',
        alias: 'Dios de la Verdad',
    },
    {
        name: 'Heimdall',
        weapon: 'Omnipresente',
        alias: 'Vigilante del Bifröst',
    },
    {
        name: 'Tyr',
        weapon: 'Tyrfing',
        alias: 'Dios de la Guerra',
    },
];
const characterDocuments = characterList.map(element => new Character(element));
mongoose.connect('mongodb://localhost:27017/Characters', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharacters = await Character.find();
        if (allCharacters.length) {
            await Character.collection.drop()
        }
    })
    .catch((err) => console.log(`Error deleting data ${err}`))
    .then(async() => {
        await Character.insertMany(characterList)
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect)