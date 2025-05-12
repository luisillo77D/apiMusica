import { Router } from 'express';
import {
  likeSong,
  unlikeSong,
} from '../controllers/userLike.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { likeSongSchema } from '../schemas/userLike.js';

const router = Router();

router.post('/', validateRequest(likeSongSchema), likeSong);
router.delete('/:user_id/:song_id', unlikeSong);

export default router;