import { Router } from "express";
import emojisRouter from "./emojis";
import * as controller from "./controller";

const router = Router();

router.use("/emojis", emojisRouter);

router.get("/", controller.getApi);

export default router;
