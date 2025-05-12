import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Playlist = sequelize.define('Playlist', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'playlists',
    timestamps: false
  });

  return Playlist;
};
