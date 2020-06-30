const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');

const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://gabriela:gabriela@cluster0-wygy6.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//métodos HTTP: GET, POST, PUT, DELETE
//Tipos de Parâmetros:
//Query Params: request.query(Filtros, ordenação, paginação,...)
//Route Params: request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)


app.listen(3333); 