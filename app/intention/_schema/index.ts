import * as zod from "zod";

export const formIntentionSchema = zod.object({
  name: zod.string().min(3).max(100),
  email: zod.email(),
  phone: zod.string(),
  message: zod.string().min(3).max(1000),
  title: zod.string().min(3).max(100),
  user_id: zod.string().optional(),
});

export type FormIntentionType = zod.infer<typeof formIntentionSchema>;
