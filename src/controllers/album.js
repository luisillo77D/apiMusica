import models from '../models/index.js';

export const getAlbums = async (req, res) => {
  try {
    const albums = await models.Album.findAll({ include: models.Artist });
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los álbumes', details: error.message });
  }
};

export const getAlbum = async (req, res) => {
  try {
    const album = await models.Album.findByPk(req.params.id, { include: models.Artist });
    album
      ? res.json(album)
      : res.status(404).json({ error: 'Álbum no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el álbum', details: error.message });
  }
};

export const createAlbum = async (req, res) => {
  try {
    const album = await models.Album.create(req.body);
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el álbum', details: error.message });
  }
};

export const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await models.Album.update(req.body, { where: { id } });
    updated
      ? res.json({ message: 'Álbum actualizado' })
      : res.status(404).json({ error: 'Álbum no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el álbum', details: error.message });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await models.Album.destroy({ where: { id } });
    deleted
      ? res.json({ message: 'Álbum eliminado' })
      : res.status(404).json({ error: 'Álbum no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el álbum', details: error.message });
  }
};
