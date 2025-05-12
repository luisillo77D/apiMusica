import models from "../models/index.js";

export const getSongs = async (req, res) => {
  try {
    const songs = await models.Song.findAll({
      include: [models.Album, models.Artist],
    });
    res.json(songs);
  } catch (error) {
    console.error("Error al obtener las canciones:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getSong = async (req, res) => {
  try {
    const song = await models.Song.findByPk(req.params.id, {
      include: [models.Album, models.Artist],
    });
    song
      ? res.json(song)
      : res.status(404).json({ error: "Canción no encontrada" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createSong = async (req, res) => {
  try {
    const { title, album_id, duration, track_number, artistIds } = req.body;
    const song = await models.Song.create({
      title,
      album_id,
      duration,
      track_number,
    });

    if (artistIds && Array.isArray(artistIds)) {
      await song.setArtists(artistIds);
    }

    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await models.Song.update(req.body, { where: { id } });
    updated
      ? res.json({ message: "Canción actualizada" })
      : res.status(404).json({ error: "Canción no encontrada" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await models.Song.destroy({ where: { id } });
    deleted
      ? res.json({ message: "Canción eliminada" })
      : res.status(404).json({ error: "Canción no encontrada" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
