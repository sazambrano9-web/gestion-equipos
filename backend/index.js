const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta básica para probar la conexión
app.get('/', (req, res) => {
    res.send('Bienvenido al backend de Gestión de Equipos');
});

// Ruta para obtener todos los equipos
app.get('/equipos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Equipos');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
