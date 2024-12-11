import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(1, "Minimum 1 karakter!"),
  password: z.string().min(1, "Minimum 1 karakter!"),
  //   roles: z.array(z.string()),
  roles: z.string(),
});
