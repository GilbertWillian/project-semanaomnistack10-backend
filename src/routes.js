const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Listar Devs
routes.get('/devs', DevController.index)
// Cadastrar Devs
routes.post('/devs', DevController.store)

// Busca Devs
routes.get('/search', SearchController.index)
module.exports = routes