import models from '../models/index.js';

export const getPlaylists = async (req, res) => {
  try {
    const playlists = await models.Playlist.findAll({ include: models.Song });
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const getPlaylist = async (req, res) => {
    try {
        const playlist = await models.Playlist.findByPk(req.params.id, {
        include: models.Song,
        });
        playlist
        ? res.json(playlist)
        : res.status(404).json({ error: 'Playlist no encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const createPlaylist = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.user.id || req.body.userId;
        console.log(req.user.id);
        const playlist = await models.Playlist.create({ name, user_id: userId });
        res.status(201).json(playlist);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const updatePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await models.Playlist.update(req.body, { where: { id } });
        updated
        ? res.json({ message: 'Playlist actualizada' })
        : res.status(404).json({ error: 'Playlist no encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const deletePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await models.Playlist.destroy({ where: { id } });
        deleted
        ? res.json({ message: 'Playlist eliminada' })
        : res.status(404).json({ error: 'Playlist no encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
