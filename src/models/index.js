const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');
const Song = require('./Song');

Artist.belongsToMany(Genre, { through: "ArtistsGenres" });
Genre.belongsToMany(Artist, { through: "ArtistsGenres" });

Album.belongsTo(Artist);
Artist.hasMany(Album);

Album.hasMany(Song);
Song.belongsTo(Album);

Artist.belongsToMany(Song, { through: "ArtistsSongs" });
Song.belongsToMany(Artist, { through: "ArtistsSongs" });

Song.belongsToMany(Genre, { through: "GenresSongs" });
Genre.belongsToMany(Song, { through: "GenresSongs" });
