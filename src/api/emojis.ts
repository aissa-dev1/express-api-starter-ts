import { Router } from "express";
import * as controller from "./controller";

export const emojisRouter = Router();

emojisRouter.get("/", controller.getEmojis);
