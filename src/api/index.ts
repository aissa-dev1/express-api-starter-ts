import { Router } from "express";
import { emojisRouter } from "./emojis";
import * as controller from "./controller";

export const apiRouter = Router();

apiRouter.use("/emojis", emojisRouter);

apiRouter.get("/", controller.getApi);
