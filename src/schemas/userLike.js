import { z } from 'zod';

export const likeSongSchema = z.object({
  user_id: z.number().int().positive(),
  song_id: z.number().int().positive(),
});