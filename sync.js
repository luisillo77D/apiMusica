import models, { sequelize } from './src/models/index.js';

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión establecida correctamente.');

    await sequelize.sync({ alter: true }); // Usa `force: true` si quieres borrar y recrear las tablas
    console.log('✅ Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('❌ Error al sincronizar la base de datos:', error);
  } finally {
    await sequelize.close();
    console.log('🔒 Conexión cerrada.');
  }
};

syncDatabase();
