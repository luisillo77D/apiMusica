import { z } from 'zod';

export const addSongToPlaylistSchema = z.object({
  playlist_id: z.number().int().positive(),
  song_id: z.number().int().positive(),
});