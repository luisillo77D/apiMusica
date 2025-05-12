import models from "../models/index.js";

export const getUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.User.findByPk(id);
    user
      ? res.json(user)
      : res.status(404).json({ error: "Usuario no encontrado" });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await models.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "El correo ya está en uso" });
    }
    const user = await models.User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error){
    res.status(400).json({ error: "No se pudo crear el usuario" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await models.User.update(req.body, { where: { id } });
    updated
      ? res.json({ message: "Usuario actualizado" })
      : res.status(404).json({ error: "Usuario no encontrado" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await models.User.destroy({ where: { id } });
    deleted
      ? res.json({ message: "Usuario eliminado" })
      : res.status(404).json({ error: "Usuario no encontrado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
