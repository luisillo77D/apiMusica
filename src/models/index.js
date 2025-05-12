import { sequelize } from '../db.js';

import userModel from './user.js';
import artistModel from './artist.js';
import albumModel from './album.js';
import songModel from './song.js';
import playlistModel from './playlist.js';
import playlistSongModel from './playlistSong.js';
import userLikeModel from './userLike.js';
import songArtistModel from './songArtist.js';

const models = {
  User: userModel(sequelize),
  Artist: artistModel(sequelize),
  Album: albumModel(sequelize),
  Song: songModel(sequelize),
  Playlist: playlistModel(sequelize),
  PlaylistSong: playlistSongModel(sequelize),
  UserLike: userLikeModel(sequelize),
  SongArtist: songArtistModel(sequelize)
};

// Asociaciones
models.Artist.hasMany(models.Album, { foreignKey: 'artist_id' });
models.Album.belongsTo(models.Artist, { foreignKey: 'artist_id' });

models.Album.hasMany(models.Song, { foreignKey: 'album_id' });
models.Song.belongsTo(models.Album, { foreignKey: 'album_id' });

models.User.hasMany(models.Playlist, { foreignKey: 'user_id' });
models.Playlist.belongsTo(models.User, { foreignKey: 'user_id' });

models.Playlist.belongsToMany(models.Song, {
  through: models.PlaylistSong,
  foreignKey: 'playlist_id',
  otherKey: 'song_id'
});
models.Song.belongsToMany(models.Playlist, {
  through: models.PlaylistSong,
  foreignKey: 'song_id',
  otherKey: 'playlist_id'
});

models.User.belongsToMany(models.Song, {
  through: models.UserLike,
  foreignKey: 'user_id',
  otherKey: 'song_id'
});
models.Song.belongsToMany(models.User, {
  through: models.UserLike,
  foreignKey: 'song_id',
  otherKey: 'user_id'
});

models.Song.belongsToMany(models.Artist, {
  through: models.SongArtist,
  foreignKey: 'song_id',
  otherKey: 'artist_id'
});
models.Artist.belongsToMany(models.Song, {
  through: models.SongArtist,
  foreignKey: 'artist_id',
  otherKey: 'song_id'
});

models.User.hasMany(models.Playlist, { foreignKey: 'user_id' });
models.Playlist.belongsTo(models.User, { foreignKey: 'user_id' });

export { sequelize };
export default models;
