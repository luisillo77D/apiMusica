import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const UserLike = sequelize.define('UserLike', {}, {
    tableName: 'user_likes',
    timestamps: false
  });

  return UserLike;
};
