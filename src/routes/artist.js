import { Router } from 'express';
import {
  createArtist,
  getArtists,
  getArtist,
  updateArtist,
  deleteArtist,
} from '../controllers/artist.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { createArtistSchema } from '../schemas/artist.js';

const router = Router();

router.get('/', getArtists);
router.get('/:id', getArtist);
router.post('/', validateRequest(createArtistSchema), createArtist);
router.put('/:id', updateArtist);
router.delete('/:id', deleteArtist);

export default router;
