import { z } from 'zod';

export const createSongSchema = z.object({
  title: z.string().min(1),
  album_id: z.number().int().positive(),
  duration: z.number().int().positive(),
  track_number: z.number().int().optional(),
  artistIds: z.array(z.number().int().positive()),
});
