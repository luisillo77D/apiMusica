import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Artist = sequelize.define('Artist', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    genre: DataTypes.TEXT,
    country: DataTypes.TEXT
  }, {
    tableName: 'artists',
    timestamps: false
  });

  return Artist;
};
