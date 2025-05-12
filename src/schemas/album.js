import { z } from 'zod';

export const createAlbumSchema = z.object({
  title: z.string().min(1),
  artist_id: z.number().int().positive(),
  release_date: z.string().date().optional(),
  genre: z.string().optional(),
});