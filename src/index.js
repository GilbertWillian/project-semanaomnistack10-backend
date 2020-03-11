const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes') // Caminho relativo

const app = express()

mongoose.connect('mongodb+srv://willian:willian@cluster0-ntsiw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors()) // Libera o acesso externo
app.use(express.json()) // Tem que vir antes das Rotas
app.use(routes)

app.listen(3333)