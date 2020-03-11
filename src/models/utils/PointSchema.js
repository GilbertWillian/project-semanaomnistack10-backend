const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({
    type: {
        type: String, // Tipo String
        enum: ['Point'],
        required: true, // Obrigatório
    },
    coordinates: {
        type: [Number], // Tipo Array de Numeros
        required: true, // Obrigatório
    }
})

module.exports = PointSchema