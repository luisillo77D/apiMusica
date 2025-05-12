import models from "../models/index.js";

export const addSongToPlaylist = async (req, res) => {
  const { playlist_id, song_id } = req.body;

  try {
    await models.PlaylistSong.create({ playlist_id, song_id });
    res.status(201).json({ message: "Canción añadida a la playlist" });
  } catch {
    res.status(400).json({ error: "Error al agregar canción a la playlist" });
  }
};

export const removeSongFromPlaylist = async (req, res) => {
  try {
    const { playlist_id, song_id } = req.params;

    const deleted = await models.PlaylistSong.destroy({
      where: { playlist_id, song_id },
    });

    deleted
      ? res.json({ message: "Canción eliminada de la playlist" })
      : res.status(404).json({ error: "Canción o playlist no encontrada" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al eliminar la canción de la playlist" });
  }
};
