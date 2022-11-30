const express = require('express');

const modelRoupas = require('../model/modelRoupas');

const roupa = express.Router();

roupa.post('/cadastrarRoupa', (req, res)=>{
    res.send('ROTA DE CADASTRO DE ROUPAS!');
});

roupa.get('/listarRoupas', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE ROUPAS!');
});

roupa.put('/alterarRoupa', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE ROUPAS!');
});

roupa.delete('/excluirRoupa', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DE ROUPAS!');
});

module.exports = roupa