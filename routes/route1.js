const express = require('express');
const logger = require('../middlewares/logger');

const router = express.Router();

router.get('/', logger('Entrando a la Ruta 1'), (req, res) => {
    res.send('Estás en la Ruta 1');
});

module.exports = router;