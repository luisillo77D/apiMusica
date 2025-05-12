import { z } from 'zod';

export const createArtistSchema = z.object({
  name: z.string().min(1),
  genre: z.string().optional(),
  country: z.string().optional(),
});