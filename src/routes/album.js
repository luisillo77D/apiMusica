import { Router } from 'express';
import {
  createAlbum,
  getAlbums,
  getAlbum,
  updateAlbum,
  deleteAlbum,
} from '../controllers/album.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { createAlbumSchema } from '../schemas/album.js';

const router = Router();

router.get('/', getAlbums);
router.get('/:id', getAlbum);
router.post('/', validateRequest(createAlbumSchema), createAlbum);
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

export default router;