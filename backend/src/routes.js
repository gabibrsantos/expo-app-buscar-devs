const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

/** Web, listar os devs(get) e cadastrar(post) */
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

/** Mobile, encontrar devs(get) */
routes.get('/search', SearchController.index);

module.exports = routes;
