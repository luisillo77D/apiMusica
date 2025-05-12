import { Router } from 'express';

import userRoutes from './user.js';
import artistRoutes from './artist.js';
import albumRoutes from './album.js';
import songRoutes from './song.js';
import playlistRoutes from './playlist.js';
import playlistSongRoutes from './playlistSong.js';
import userLikeRoutes from './userLike.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();
router.use(authenticate);
router.use('/users', userRoutes);
router.use('/artists', artistRoutes);
router.use('/albums', albumRoutes);
router.use('/songs', songRoutes);
router.use('/playlists', playlistRoutes);
router.use('/playlist-songs', playlistSongRoutes);
router.use('/user-likes', userLikeRoutes);

export default router;
