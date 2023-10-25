import { Request, Response } from "express";
import Page from "../models/Page";

export default {
  findAll: async (req: Request, res: Response) => {
    const queryResponse = await Page.find({});
    return res.json(queryResponse);
  }
};
