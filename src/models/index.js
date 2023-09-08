const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');

Artist.belongsToMany(Genre, { through: "ArtistsGenres" });
Genre.belongsToMany(Artist, { through: "ArtistsGenres" });

Album.belongsTo(Artist);
Artist.hasMany(Album);
