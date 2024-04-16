import * as z from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
});

export const userNameSchema = z.object({
  name: z.string().min(3).max(32),
});

export const FeedbackFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  feedback: z.string().min(10, {
    message: "Please enter a message.",
  }),
});
