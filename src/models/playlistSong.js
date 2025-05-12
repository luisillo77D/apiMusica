import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const PlaylistSong = sequelize.define('PlaylistSong', {}, {
    tableName: 'playlist_songs',
    timestamps: false
  });

  return PlaylistSong;
};
