import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/user.js';
import { validateRequest } from '../middlewares/validateRequest.js';
import { createUserSchema } from '../schemas/user.js';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', validateRequest(createUserSchema), createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;