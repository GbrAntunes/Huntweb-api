const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir') // Biblioteca para usar require em um dir

// Inicializando o app
const app = express()

// Define que o envio de dados para a api será feito em formato JSON
app.use(express.json())

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
requireDir('./src/models') // Importando todas as models

app.use('/api', require('./src/routes'))

app.listen(3000)