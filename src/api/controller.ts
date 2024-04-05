import { Request, Response } from "express";

export function getApi(req: Request, res: Response) {
  return res.status(200).json({ message: "API - aissa-dev1" });
}

export function getEmojis(req: Request, res: Response) {
  return res.status(200).json(["😐", "😉", "😎", "🤣"]);
}
