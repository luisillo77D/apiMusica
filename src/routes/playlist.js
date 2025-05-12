import { Router } from 'express';
import {
  createPlaylist,
  getPlaylists,
  getPlaylist,
  updatePlaylist,
  deletePlaylist,
} from '../controllers/playlist.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { createPlaylistSchema } from '../schemas/playlist.js';

const router = Router();

router.get('/', getPlaylists);
router.get('/:id', getPlaylist);
router.post('/', validateRequest(createPlaylistSchema), createPlaylist);
router.put('/:id', updatePlaylist);
router.delete('/:id', deletePlaylist);

export default router;