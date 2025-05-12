import models from '../models/index.js';

export const getArtists = async (req, res) => {
  try {
    const artists = await models.Artist.findAll();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los artistas', details: error.message });
  }
};

export const getArtist = async (req, res) => {
  try {
    const artist = await models.Artist.findByPk(req.params.id);
    artist
      ? res.json(artist)
      : res.status(404).json({ error: 'Artista no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el artista', details: error.message });
  }
};

export const createArtist = async (req, res) => {
  try {
    const artist = await models.Artist.create(req.body);
    res.status(201).json(artist);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el artista', details: error.message });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await models.Artist.update(req.body, { where: { id } });
    updated
      ? res.json({ message: 'Artista actualizado' })
      : res.status(404).json({ error: 'Artista no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el artista', details: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await models.Artist.destroy({ where: { id } });
    deleted
      ? res.json({ message: 'Artista eliminado' })
      : res.status(404).json({ error: 'Artista no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el artista', details: error.message });
  }
};
