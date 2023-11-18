const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const proveedoresController = require('./controllers/proveedores.controller');

dotenv.config();

const {
    SERVER_TAG = 'API EXPRESS'
} = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request client URL: ${req.get('host')}${req.originalUrl} >>>> ${SERVER_TAG}`);
    next();
});

app.use('/api/proveedores', proveedoresController);

module.exports = app;
