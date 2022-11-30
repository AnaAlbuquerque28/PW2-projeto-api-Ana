const express = require('express');
const routesRoupas = require('./route/categoria');

const app = express();

app.use('/', routesRoupas);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO - EM http://localhost:3000 ');
});

