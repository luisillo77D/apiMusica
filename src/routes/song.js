import { Router } from 'express';
import {
  createSong,
  getSongs,
  getSong,
  updateSong,
  deleteSong,
} from '../controllers/song.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { createSongSchema } from '../schemas/song.js';

const router = Router();

router.get('/', getSongs);
router.get('/:id', getSong);
router.post('/', validateRequest(createSongSchema), createSong);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);

export default router;
