import { DataTypes } from 'sequelize';


export default (sequelize) => {
  const Album = sequelize.define('Album', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.TEXT, allowNull: false },
    release_date: DataTypes.DATE,
    genre: DataTypes.TEXT
  }, {
    tableName: 'albums',
    timestamps: false
  });

  return Album;
};
