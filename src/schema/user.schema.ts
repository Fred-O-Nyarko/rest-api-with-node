import { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Pasdword is required",
    }).min(6, "Password to short - should be 6 chars minimum"),
  }),
});
