import { Router } from 'express';
import {
  addSongToPlaylist,
  removeSongFromPlaylist,
} from '../controllers/playlistSong.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { addSongToPlaylistSchema } from '../schemas/playlistSong.js';

const router = Router();

router.post('/', validateRequest(addSongToPlaylistSchema), addSongToPlaylist);
router.delete('/:playlist_id/:song_id', removeSongFromPlaylist);

export default router;