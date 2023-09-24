const express = require('express');
const path = require('path');
const fs = require('fs')
const publicPath = path.join (__dirname, './public');

const musicandoRoutes = require('./routes/musicandoRoutes');

const app = express();

app.use ( express.static ( publicPath));
app.use ( express.urlencoded({ extended: true }));
app.use ( express.json());

/* Routers */
app.use(musicandoRoutes);


app.listen(3000, () => {
    console.log('servidor funcionando http://localhost:3000/');
});