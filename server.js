const express = require('express')
const mongoose = require('mongoose')

// Inicializando o app
const app = express()

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
require('./src/models/Products')

// Rotas
app.get('/', (request, response) => {

})

app.listen(3000)