const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

// Creamos el servidor
const app = express();

app.use(cors());

// Conectamos a la BD
conectarDB();

app.use(express.json()); 

app.use('/api/usuarios', require('./routes/usuario'));

app.listen(4000, () => {
    console.log('El servidor funciona');
})