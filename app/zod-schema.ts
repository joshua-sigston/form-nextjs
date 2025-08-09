import { z } from "zod";

export const submissionSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(2).max(1000),
  image: z.instanceof(File).optional(),
});
