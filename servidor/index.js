const express = require('express');
const conectarDB = require('./config/db');
// Creamos el servidor
const app = express();
const cors = require("cors");
// Conectamos a la BD
conectarDB();
app.use(cors());

// Middleware para manejar json
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));



app.listen(4000, () => {
    console.log("Servidor escuchando");
})