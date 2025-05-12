import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Song = sequelize.define('Song', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.TEXT, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    track_number: DataTypes.INTEGER,
  }, {
    tableName: 'songs',
    timestamps: false
  });

  return Song;
};
