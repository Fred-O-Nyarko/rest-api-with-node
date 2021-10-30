import { createUserSchema } from "./schema/user.schema";
import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.use((_req, res) => {
    res.status(404).send("Unable to find the requested resource!");
  });
}

export default routes;
