import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const SongArtist = sequelize.define('SongArtist', {
    song_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: { model: 'songs', key: 'id' }
    },
    artist_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: { model: 'artists', key: 'id' }
    }
  }, {
    tableName: 'song_artists',
    timestamps: false
  });

  return SongArtist;
};
