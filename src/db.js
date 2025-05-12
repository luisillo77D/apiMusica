import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('chafafy', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});