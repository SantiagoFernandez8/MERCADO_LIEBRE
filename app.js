const express = require('express')
const app = express();

const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.listen(3000, console.log('Servidor iniciado en el puerto 3000'))