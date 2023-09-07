const express = require('express');
const genreRouter = require('./genre.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', genreRouter);

module.exports = router;