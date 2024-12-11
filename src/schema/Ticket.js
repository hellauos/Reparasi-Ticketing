import { z } from "zod";

export const ticketSchema = z.object({
    title: z.string().min(1, "Minimum 1 karakter!"),
    desc: z.string().min(1, "Minimum 1 karakter!"),
});
