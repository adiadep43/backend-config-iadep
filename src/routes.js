const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/plive', async (req, res) => {
    const { live, url_live } = req.body;

    await connection('config').insert({
        live,
        url_live
    });

    return res.send('Cadastrado com sucesso!');
});

routes.get('/live', async (req, res) => {
    const live = await connection('config').select('*');
    
    return res.json(live);
});

routes.put('/live', async (req, res) => {
    const { live, url_live } = req.body;

    await connection('config').update({
        live,
        url_live
    });

    return res.send('Modifcado com sucesso!');
});

module.exports = routes;