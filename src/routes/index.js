const express = require('express');
const genreRouter = require('./genre.router');
const artistRouter = require('./artist.router');
const albumRouter = require('./album.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', genreRouter);
router.use('/artists', artistRouter);
router.use('/albums', albumRouter);

module.exports = router;
