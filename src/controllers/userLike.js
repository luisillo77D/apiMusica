import models from "../models/index.js";

export const likeSong = async (req, res) => {
  const { user_id, song_id } = req.body;

  try {
    await models.UserLike.create({ user_id, song_id });
    res.status(201).json({ message: "Canción marcada como favorita" });
  } catch {
    res.status(400).json({ error: "Error al dar like a la canción" });
  }
};

export const unlikeSong = async (req, res) => {
  try {
    const { user_id, song_id } = req.params;

    const deleted = await models.UserLike.destroy({
      where: { user_id, song_id },
    });

    deleted
      ? res.json({ message: "Canción retirada de favoritos" })
      : res.status(404).json({ error: "Like no encontrado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el like de la canción" });
  }
};
