const express = require('express');
const logger = require('../middlewares/logger');

const router = express.Router();

router.get('/', logger('Entrando a la Ruta 2'), (req, res) => {
    res.send('Estás en la Ruta 2');
});

module.exports = router;